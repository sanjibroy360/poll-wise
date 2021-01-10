import React from "react";

export default function Header({current_user}) {
  return (
    <header class="bg-primary">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary py-0">
        <a class="navbar-brand" href="#">
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
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Create Poll <span class="sr-only">(current)</span>
              </a>
            </li>
          </ul>
          <div class="actions d-flex justify-content-between align-items-center flex-wrap my-2 my-lg-0">
            <div>
              <a href="/login">
                <button class="btn btn-link mx-2">{current_user?.name}</button>
              </a>
            </div>
            <div>
              <a href="/logout" class="btn btn-link mx-2">
                <button class="btn btn-link mx-2"> Log out </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
