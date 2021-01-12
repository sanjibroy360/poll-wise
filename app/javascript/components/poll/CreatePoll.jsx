import axios from "axios";
import React, { useEffect, useState } from "react";

import Button from "../button/Button";
import DisabledButton from "../button/DisabledButton";
import Error from "../shared/FormError";

export default function CreatePoll() {
  let [title, setTitle] = useState("");

  let [optionA, setOptionA] = useState("");
  let [optionB, setOptionB] = useState("");
  let [optionC, setOptionC] = useState("");
  let [optionD, setOptionD] = useState("");

  let [isFormFilled, setIsFormFilled] = useState(false);
  let [isLoading, setLoading] = useState(false);
  let [errors, setErrors] = useState([]);

  useEffect(() => {
    setIsFormFilled(
      Boolean(
        title?.trim() &&
          optionA?.trim() &&
          optionB?.trim() &&
          optionC?.trim() &&
          optionD?.trim()
      )
    );
  }, [title, optionA, optionB, optionC, optionD]);

  function reset_form() {
    setTitle("");
    setOptionA("");
    setOptionB("");
    setOptionC("");
    setOptionD("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    let payload = {
      poll: {
        title,
        options_attributes: [
          { name: optionA },
          { name: optionB },
          { name: optionC },
          { name: optionD },
        ],
      },
    };
    let headers = {
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
      },
    };

    try {
      var response = await axios.post("/polls/new", payload, headers);
      if (response) {
        reset_form();
        setLoading(false);
      }
    } catch (error) {
      reset_form();
      setLoading(false);
    }
  }

  return (
    <div className="form_wrapper col-sm-4 mx-auto mt-3 px-4 py-4">
      <h2 className="text-center py-4">Create Poll</h2>
      {errors?.length > 0 && <Error errors={errors} />}
      <form onSubmit={handleSubmit} method="POST">
        <div class="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            class="form-control"
            onChange={(e) => setTitle(e.target.value)}
            key="name001"
          />
        </div>
        <div class="form-group">
          <label>Option-A</label>
          <input
            type="text"
            name="optionA"
            value={optionA}
            class="form-control"
            onChange={(e) => setOptionA(e.target.value)}
            key="name001"
          />
        </div>
        <div class="form-group">
          <label>Option-B</label>
          <input
            type="text"
            name="optionB"
            value={optionB}
            class="form-control"
            onChange={(e) => setOptionB(e.target.value)}
            key="name001"
          />
        </div>
        <div class="form-group">
          <label>Option-C</label>
          <input
            type="text"
            name="optionC"
            value={optionC}
            class="form-control"
            onChange={(e) => setOptionC(e.target.value)}
            key="name001"
          />
        </div>
        <div class="form-group">
          <label>Option-D</label>
          <input
            type="text"
            name="optionD"
            value={optionD}
            class="form-control"
            onChange={(e) => setOptionD(e.target.value)}
            key="name001"
          />
        </div>
        {isFormFilled ? (
          <Button
            type="submit"
            style="success"
            disabled={isFormFilled}
            text="Save"
            is_loading={isLoading}
          />
        ) : (
          <DisabledButton
            type="submit"
            style="success"
            disabled={isFormFilled}
            text="Save"
          />
        )}
        <Button style="secondary" text="Cancel" />
      </form>
    </div>
  );
}
