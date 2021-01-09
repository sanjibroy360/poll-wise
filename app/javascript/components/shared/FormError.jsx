import React from "react";

export default function FormError({ errors }) {
  return (
    <div id="error_explanation" className="px-4 py-1 alert alert-warning">
      <ul>
        {errors.map((error) => {
          return <li>{error}.</li>;
        })}
      </ul>
    </div>
  );
}
