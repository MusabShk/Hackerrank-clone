import React from "react";
import "../styles.css";
import Base from "./Base";

const Defaultpg = () => {
  return (
    <div>
      <div className="container p-3">
        <div className="row">
          <h1 style={{ color: "grey" }}>Matching customers with</h1>
        </div>
        <div className="row">
          <h1 style={{ color: "grey" }}>great companies.</h1>
        </div>
        <div className="row p-4"></div>
        <div className="row">
          <div className="col-5">
            <p>
              <h5>For Companies</h5>
            </p>
            <p>
              We are the market-leading technical interview platform to identify
              and hire developers wherever they are
            </p>
          </div>
          <div className="col-5">
            <p>
              <h5>For Customers</h5>
            </p>
            <p>
              Join over 11 Million developers practice coding skills, prepare
              foe interviews and get hired
            </p>
          </div>
        </div>
        {/* <div className="row p-4"></div> */}
      </div>
    </div>
  );
};

export default Defaultpg;
