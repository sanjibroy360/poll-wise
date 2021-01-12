import React from "react";

export default function PollList({polls}) {
    console.log(polls, typeof polls)
  return (
    <div>
      {polls?.map((poll) => {
        return (
          <div>
            <h3>{poll.title}</h3>

            {poll.options.map((option) => {
              return (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="exampleRadios"
                    id="exampleRadios1"
                    value="option1"
                    checked
                  />
                  <label class="form-check-label" for="exampleRadios1">
                    {option.name}
                  </label>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
