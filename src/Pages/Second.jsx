import { useState } from "react";
import { Link } from "react-router-dom";

const Second = () => {
  const [selectedOption, setSelectedOption] = useState(1);
  const [isChecked, setIsChecked] = useState(false);
  const [arcadePrice, setArcadePrice] = useState("$9/mo");
  const [advancedPrice, setAdvancedPrice] = useState("$12/mo");
  const [proPrice, setProPrice] = useState("$15/mo");


  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  const handleToggle = () => {
    setIsChecked(!isChecked);
    setArcadePrice(arcadePrice === "$9/mo" ? '$90/yr' : "$9/mo")
    setAdvancedPrice(advancedPrice === "$12/mo" ? '$120/yr' : "$12/mo")
    setProPrice(proPrice === "$15/mo" ? '$150/yr' : "$15/mo")


  };

  return (
    <div className="page two">
      <div className="page-head">
        <h1>Select your plan</h1>
        <p className="desc">
          You have the option of monthly or yearly billing.
        </p>
      </div>

      <div className="options">
        <div
          className={`option one ${selectedOption === 1 ? "active" : ""}`}
          onClick={() => handleSelect(1)}
        >
          <p className="option-name">Arcade</p>
          <p className="option-price">{arcadePrice}</p>
          <p className={`free ${isChecked ? "year" : "month"}`}>2 months free</p>
        </div>
        <div
          className={`option two ${selectedOption === 2 ? "active" : ""}`}
          onClick={() => handleSelect(2)}
        >
          <p className="option-name">Advanced</p>
          <p className="option-price">{advancedPrice}</p>
          <p className={`free ${isChecked ? "year" : "month"}`}>2 months free</p>

        </div>
        <div
          className={`option three ${selectedOption === 3 ? "active" : ""}`}
          onClick={() => handleSelect(3)}
        >
          <p className="option-name">Pro</p>
          <p className="option-price">{proPrice}</p>
          <p className={`free ${isChecked ? "year" : "month"}`}>2 months free</p>

        </div>
      </div>

      <div className="slider-cont">
        <p className={`left ${isChecked ? "year" : "month"}`}>Monthly</p>
        <label class="switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
        <p className={`right ${isChecked ? "year" : "month"}`}>Yearly</p>
      </div>

      <div className="nav-buttons two">
        <Link to="/" className="back">
          Go Back
        </Link>
        <Link to="/three" className="next">
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default Second;
