import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "../button/Button";
import DisabledButton from "../button/DisabledButton";
import Error from "../shared/FormError";
export default function Signup() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password_confirmation, setPasswordConfirmation] = useState("");
  let [isFormFilled, setIsFormFilled] = useState(false);
  let [isLoading, setLoading] = useState(false);
  let [errors, setErrors] = useState([]);

  useEffect(() => {
    setIsFormFilled(
      Boolean(
        name.trim() &&
          email.trim() &&
          password.trim() &&
          password_confirmation.trim()
      )
    );
  }, [name, email, password, password_confirmation]);

  function reset_form() {
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let payload = {
      user: { name, email, password, password_confirmation },
    };
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };
  
    try {
      var response = await axios.post("/signup", payload, headers);
      if (response) {
        reset_form();
        setLoading(false);
        window.location.href = '/';
      }
    } catch (error) {
      reset_form();
      setLoading(false);
      setErrors(error.response.data.errors);
    }
  }

  return (
    <div className="form_wrapper col-sm-4 mx-auto mt-3 px-4 py-4">
      <h2 className="text-center py-4">Sign up</h2>
      {errors?.length > 0 && <Error errors={errors} />}
      <form onSubmit={handleSubmit} method="POST">
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            class="form-control"
            onChange={(e) => setName(e.target.value)}
            key="name001"
          />
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            class="form-control"
            onChange={(e) => setEmail(e.target.value)}
            key="email001"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            class="form-control"
            onChange={(e) => setPassword(e.target.value)}
            key="password001"
          />
        </div>
        <div class="form-group">
          <label>Confirm password</label>
          <input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            class="form-control"
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            key="password_confirmation001"
          />
        </div>
        {isFormFilled ? (
          <Button
            type="submit"
            style="success"
            disabled={isFormFilled}
            text="Sign up"
            is_loading={isLoading}
          />
        ) : (
          <DisabledButton
            type="submit"
            style="success"
            disabled={isFormFilled}
            text="Sign up"
          />
        )}
      </form>
      <small>
        Already have an account? <a href="/login">Log in</a>
      </small>
    </div>
  );
}
