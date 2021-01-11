import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "../button/Button";
import DisabledButton from "../button/DisabledButton";
import Error from "../shared/FormError";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [isFormFilled, setIsFormFilled] = useState(false);
  let [isLoading, setLoading] = useState(false);
  let [errors, setErrors] = useState([]);

  useEffect(() => {
    setIsFormFilled(Boolean(email.trim() && password.trim()));
  }, [email, password]);

  function reset_form() {
    setEmail("");
    setPassword("");
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      setLoading(true);
      let payload = {
        session: { email, password },
      };
      let headers = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
        },
      };

      var response = await axios.post("/login", payload, headers);
      if (response) {
        reset_form();
        setLoading(false);
        window.location.href = "/";
        toast.success(response.data.success);
      }
    } catch (error) {
      reset_form();
      setLoading(false);
      if (error.response.status == 401) {
        toast.error(error.response.data.errors[0]);
      }
    }
  }

  return (
    <>
      <div className="form_wrapper col-sm-4 mx-auto mt-3 px-4 pt-2 pb-4">
        <h2 className="text-center py-4">Log in</h2>
        {errors?.length > 0 && <Error errors={errors} />}
        <form onSubmit={handleSubmit} method="POST">
          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              class="form-control"
              onChange={(e) => setEmail(e.target.value)}
              key="email002"
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
              key="password002"
            />
          </div>

          {isFormFilled ? (
            <Button
              type="submit"
              style="success"
              disabled={isFormFilled}
              text="Log in"
              is_loading={isLoading}
            />
          ) : (
            <DisabledButton
              type="submit"
              style="success"
              disabled={isFormFilled}
              text="Log in"
            />
          )}
        </form>
        <small>
          New user? <a href="/signup">Sign up</a>
        </small>
      </div>
      <ToastContainer position="bottom-center" hideProgressBar={true} />
    </>
  );
}
