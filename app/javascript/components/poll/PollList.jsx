import React from "react";
import SinglePoll from "./SinglePoll";
import PollResult from "./PollResult";

export default function PollList({ polls }) {
    
  return (
    <div className='container'>
      {polls?.map((poll) => {
        return (
          <React.Fragment key={poll.id}>
            {poll.voters.includes(poll.current_user?.id) ? (
              <PollResult poll={poll} />
            ) : (
              <SinglePoll poll={poll} key={poll.id} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
