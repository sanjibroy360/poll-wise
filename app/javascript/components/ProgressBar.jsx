import React from "react";

export default function ProgressBar({ votePercentage = 0 }) {
  return (
    <div className="w-75 h-50">
      <div class="progress">
        <div
          class={`progress-bar bg-success w-${Math.floor(votePercentage)}`}
          role="progressbar"
          aria-valuenow={`${votePercentage}`}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
