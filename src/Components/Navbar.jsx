import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/" className="navlink">
          <div className="number">1</div>
          <div className="step-info">
            <p className="step">STEP 1</p>
            <p className="step-title">YOUR INFO</p>
          </div>
        </NavLink>
        <NavLink to="/two" className="navlink">
          <div className="number">2</div>
          <div className="step-info">
            <p className="step">STEP 2</p>
            <p className="step-title">SELECT PLAN</p>
          </div>
        </NavLink>
        <NavLink to="/three" className="navlink">
          <div className="number">3</div>
          <div className="step-info">
            <p className="step">STEP 3</p>
            <p className="step-title">ADD-ONS</p>
          </div>
        </NavLink>
        <NavLink to="/four" className="navlink">
          <div className="number">4</div>
          <div className="step-info">
            <p className="step">STEP 4</p>
            <p className="step-title">SUMMARY</p>
          </div>
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
