import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "Hackerrank",
  className = "bg-dark text-white p-4",
}) => (
  <div>
    <div className="conainer-fluid">
      <div className="jumbotron bg-white text-dark text-left p-4">
        <div className="row">
          <div className="col-6">
            <a className="nav-link active" aria-current="page" href="/">
              <h2 style={{ color: "black" }}>{title}</h2>
            </a>
          </div>
          <div className="col-6">
            <Menu />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Base;
