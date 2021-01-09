import React from "react";
import LoadingButton from "./LoadingButton";

export default function Button({
  children,
  text = "Button",
  type = "button",
  style = "success",
  size = "",
  is_loading = false,
}) {
  let btnText = children || text || "Button";
  return (
    <>
      {is_loading ? (
        <LoadingButton />
      ) : (
        <button type={type} className={`btn btn-${style} btn-block`}>
          {btnText}
        </button>
      )}
    </>
  );
}
