import { Link } from "react-router-dom";

const First = () => {
  return (
    <div className="page one">
      <div className="page-head">
        <h1>Personal info</h1>
        <p className="desc">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <form>
        <label htmlFor="name">Name</label>
        <input type="text" placeholder="e.g. Stephen King" />
        <label htmlFor="email">Email Address</label>
        <input type="text" placeholder="e.g. stephenking@lorem.com" />
        <label htmlFor="number">Phone Number</label>
        <input type="number" placeholder="e.g. +1 234 567 890" className="number"/>
      </form>

      <div className="nav-buttons one">
        <Link to="/two" className="next" >
          Next Step
        </Link>
      </div>
    </div>
  );
};

export default First;
