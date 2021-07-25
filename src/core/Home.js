import React, { useState } from "react";
import "../styles.css";
import Base from "./Base";
import Defaultpg from "./Defaultpg";
import Userform from "../user/Userform";

const Home = () => {
  const [vis, setVis] = useState(true);
  return (
    <div>
      <div className="row">
        <Base />
      </div>
      <div className="row">
        {vis ? (
          <div>
            <div className="row">
              <Defaultpg />
            </div>
            <div className="container p-3">
              <div className="row">
                <div className="col-5">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setVis(false);
                    }}
                  >
                    Companies
                  </button>
                </div>
                <div className="col-5">
                  <button type="button" className="btn btn-primary">
                    Customers
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <Userform />
          </div>
        )}
      </div>

      {/* <div className="container p-5">
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
        <div className="row p-4"></div>
        <div className="row">
          <div className="col-5">
            <button type="button" className="btn btn-primary">
              Companies
            </button>
          </div>
          <div className="col-5">
            <button type="button" className="btn btn-primary">
              Customers
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
  console.log(vis);
};

export default Home;
