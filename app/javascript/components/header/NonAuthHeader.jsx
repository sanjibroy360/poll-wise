import React from "react";

export default function Header() {
  return (
    <header class="bg-primary">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-0">
        <a class="navbar-brand w-75 p-right-5" href="/">
          <h2> Poll Wise</h2>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <div class="actions d-flex justify-content-between align-items-center flex-wrap my-2 my-lg-0">
            <div>
              <a href="/login">
                <button class="btn btn-link mx-2">Log in</button>
              </a>
            </div>
            <div>
              <a href="/signup" class="btn btn-link mx-2">
                <button class="btn btn-link mx-2"> Sign up</button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
