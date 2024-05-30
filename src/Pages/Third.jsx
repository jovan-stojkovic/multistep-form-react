import React, { useState } from "react";
import { Link } from "react-router-dom";

const Third = () => {
  const [checkedState, setCheckedState] = useState({
    boxOne: false,
    boxTwo: false,
    boxThree: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckedState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <div className="page three">
      <div className="page-head">
        <h1>Pick add-ons</h1>
        <p className="desc">Add-ons help enhance your gaming experience.</p>
      </div>

      <div className="checkboxes-cont">
        <div
          className={`checkbox-opt one ${checkedState.boxOne ? "checked" : ""}`}
        >
          <input
          className="input-checkbox"
            type="checkbox"
            id="boxOne"
            checked={checkedState.boxOne}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="boxOne">
            <div className="checkbox-text">
              <p className="label">Online service</p>
              <p className="label-desc">Access to multiplayer games</p>
            </div>
            <p className="price">+$1/mo</p>
          </label>
        </div>
        <div
          className={`checkbox-opt two ${checkedState.boxTwo ? "checked" : ""}`}
        >
          <input
          className="input-checkbox"
            type="checkbox"
            id="boxTwo"
            checked={checkedState.boxTwo}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="boxTwo">
            <div className="checkbox-text">
              <p className="label">Larger storage</p>
              <p className="label-desc">Extra 1TB of cloud save</p>
            </div>
            <p className="price">+$2/mo</p>
          </label>
        </div>
        <div
          className={`checkbox-opt three ${
            checkedState.boxThree ? "checked" : ""
          }`}
        >
          <input
          className="input-checkbox"
            type="checkbox"
            id="boxThree"
            checked={checkedState.boxThree}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="boxThree">
            <div className="checkbox-text">
              <p className="label">Customizable Profile</p>
              <p className="label-desc">Custom theme on your profile</p>
            </div>
            <p className="price">+$2/mo</p>
          </label>
        </div>
      </div>

      <div className="nav-buttons two">
        <Link to="/two" className="back">
          Go Back
        </Link>
        <Link to="/four" className="next">
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Third;
