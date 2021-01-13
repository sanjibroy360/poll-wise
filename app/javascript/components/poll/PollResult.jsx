import React, { useEffect, useState } from "react";
import ProgressBar from "../ProgressBar";

export default function PollResult({ poll }) {
  let [totalVote, setTotalVote] = useState(0);

  useEffect(() => {
    let sum = poll.options.reduce((acc, cv) => {
      acc += +cv.vote_count;
      return acc;
    }, 0);
    
    setTotalVote(sum);
  }, [poll]);

  function votePercentage(vote_count = 0) {
    return (+vote_count / +totalVote) * 100;
  }
  return (
    <div className="poll w-50 p-4 mb-4 mx-auto" key={poll.id+2}>
      <h3 className="lead my-2 poll_title">{poll.title}</h3>
      {poll.options.map((option) => {
        return (
          <div className="my-3" key={option.id + 3}>
            <div className="d-flex justify-content-between align-items-center w-75 mb-2">
              <p className="option_name">{option.name}</p>
              <p className="option_name">
                {option.vote_count} ({votePercentage(option.vote_count) || 0}%)
              </p>
            </div>
            <ProgressBar
              votePercentage={votePercentage(option.vote_count) || 0}
            />
          </div>
        );
      })}
    </div>
  );
}
