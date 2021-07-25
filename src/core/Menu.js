import React from "react";
import { Link, withRouter } from "react-router-dom";

const Menu = () => (
  <div>
    <ul className="nav justify-content-end">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/auth/login">
          Login
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/auth/signup">
          Sign Up
        </a>
      </li>
    </ul>
  </div>
);

export default withRouter(Menu);
