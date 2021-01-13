import axios from "axios";
import React, { useState } from "react";

export default function SinglePoll({ poll }) {
  let [votedOption, setVotedOption] = useState("");

  async function handleVoting(e) {
    try {
      e.preventDefault();
      let headers = {
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": document.querySelector('[name="csrf-token"]').content,
        },
      };
      let payload = {
        ballot: {
          poll_id: poll.id,
          option_id: votedOption,
        },
      };
      let url = `ballot/new`;
      
      let response = await axios.post(url, payload, headers);
      if(response.status == 200) {
          window.location.href = '/';
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="poll w-50 mx-auto" key={poll.id+1}>
      <form method="POST" onSubmit={handleVoting}>
        <h3 className="lead my-2 poll_title w-75">{poll.title}</h3>

        {poll.options.map((option) => {
          return (
            <div class="form-check w-75 mb-2" key={option.id}>
              <input
                class="form-check-input"
                type="radio"
                name={`Poll_no_${poll.id}`}
                id={`Radio${option.id}`}
                value={option.id}
                key={`Option${option.id}`}
                onChange={(e) => setVotedOption(e.target.value)}
              />
              <label
                className="form-check-label option_name"
                htmlFor={`Radio${option.id}`}
              >
                {option.name}
              </label>
            </div>
          );
        })}
        {votedOption ? (
          <button type="submit" className="btn btn-success btn-sm vote-btn">
            VOTE
          </button>
        ) : (
          <button className="btn btn-success btn-sm vote-btn" disabled>
            VOTE
          </button>
        )}
      </form>
    </div>
  );
}
