import React from "react";
import Loader from "./LoadingButton";

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
    <button type={type} className={`btn btn-${style} btn-block`} disabled>
      {is_loading ? <Loader /> : btnText}
    </button>
  );
}