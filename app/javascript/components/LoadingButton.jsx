import React from "react";

export default function LoadingButton() {
  return (
    <button class="btn btn-success btn-block" type="button" disabled>
      <span
        class="spinner-border spinner-border-sm btn-block"
        role="status"
        aria-hidden="true"
      ></span>
      <span class="sr-only">Loading...</span>
    </button>
  );
}