import React, { useState } from "react";
import { Link } from "react-router-dom";

const currentTabs = (history, path) => {
  if (history.location.pathname === path) {
    //path=link  //history.location.pathname=the place where you are currently
    return { color: "#FFFFFF" }; //if both are same, then give one colour or give another colour
  } else {
    return { color: "#758283" };
  }
};
const currentTabsnavpills = (history, path) => {
  if (history.location.pathname === path) {
    //path=link  //history.location.pathname=the place where you are currently
    return "nav-item nav-pills"; //if both are same, then give one colour or give another colour
  } else {
    return "nav-item";
  }
};

const Signup = ({ history }) => {
  return (
    <div>
      <nav className="nav justify-content-center p-3">
        <a className="nav-link" aria-current="page" href="/">
          <h1 style={{ color: "black" }}>Hackerrank</h1>
        </a>
      </nav>
      <nav className="nav justify-content-center p-3">
        <h4 style={{ color: "grey" }}>For Comapanies</h4>
      </nav>
      <div className="row text-center">
        <p>Practice coding, prepare for interviews, and get hired.</p>
      </div>
      <div className="row">
        <ul className="nav justify-content-center">
          <li className={currentTabsnavpills(history, "/auth/signup")}>
            <a
              style={currentTabs(history, "/auth/signup")}
              className="nav-link active"
              href="/auth/signup"
            >
              Sign Up
            </a>
          </li>
          <li className={currentTabsnavpills(history, "/auth/login")}>
            <a
              style={currentTabs(history, "/auth/login")}
              className="nav-link active"
              href="/auth/login"
            >
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="parent-div">
        <div className="child-div col-md-4">
          <div className="card">
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">
                <form>
                  <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label> */}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First and Last name"
                    />
                  </div>
                  <div className="mb-3">
                    {/* <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    {/* <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label> */}
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>

                  <button type="submit" className="btn btn-dark">
                    Create an Account
                  </button>
                </form>
              </p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
