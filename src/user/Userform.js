import React from "react";
import "../styles.css";

const Userform = () => {
  return (
    <div className="container">
      <form>
        <div className="row p-4 mb-3">
          <h5>Enter Company Details:</h5>
        </div>
        <div className="col-10">
          <label for="exampleFormControlInput1" class="form-label">
            Company Name:
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
          />
          <label for="exampleFormControlInput1" class="form-label">
            Location:
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">Mumbai</option>
            <option value="2">Delhi</option>
            <option value="3">Kanpur</option>
          </select>
        </div>
        <div className="row p-4">
          <h5>Enter Product Details:</h5>
        </div>
        <div className="col-10">
          <label for="exampleFormControlInput1" class="form-label">
            Product Category:
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">Electronic</option>
            <option value="2">Fashion</option>
            <option value="3">Grocery</option>
          </select>
          <label for="exampleFormControlInput1" class="form-label">
            Product:
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select</option>
            <option value="1">Laptops</option>
            <option value="2">Levis</option>
            <option value="3">BigBasket</option>
          </select>
          <label for="exampleFormControlInput1" class="form-label">
            Product ID / Unique key:
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
          />
        </div>
        <div className="row p-4">
          <h5>Your Details:</h5>
        </div>
        <div className="col-10">
          <label for="exampleFormControlInput1" class="form-label">
            Email:
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="*required*"
          />
          <label for="exampleFormControlInput1" class="form-label">
            Name:
          </label>
          <input
            className="form-control"
            type="text"
            aria-label="default input example"
          />
          <label for="exampleFormControlInput1" class="form-label">
            Phone No:
          </label>
          <input
            className="form-control"
            type="number"
            aria-label="default input example"
          />
        </div>
        <div className="col-2">
          <p />
          <button type="button" class="btn btn-dark">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Userform;
