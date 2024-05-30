import { useState } from "react";
import { Link } from "react-router-dom";

const Fourth = () => {
  const [confirm, setConfirm] = useState("hide");

  return (
    <>
      <div className={`page four ${confirm}`}>
        <div className="page-head">
          <h1>Finishing up</h1>
          <p className="desc">
            Double-check everything looks OK before confirming.
          </p>
        </div>

        <div className="summary">
          <div className="top">
            <div className="left">
              <p className="selected-plan">Arcade (Yearly)</p>
              <Link to="/two" className="change-button">
                Change
              </Link>
            </div>
            <div className="summary-price">$90/yr</div>
          </div>
          <div className="bottom one">
            <p className="selected-add-on">Online service</p>
            <div className="add-on-price">+$10/yr</div>
          </div>
          <div className="bottom">
            <p className="selected-add-on">Larger storage</p>
            <div className="add-on-price">+$20/yr</div>
          </div>
        </div>
        <div className="total">
          <p className="p-total">Total (per year)</p>
          <p className="total-price">$120/yr</p>
        </div>

        <div className="nav-buttons two">
          <Link to="/three" className="back">
            Go Back
          </Link>
          <button className="next" onClick={() => setConfirm("show")}>
            Confirm
          </button>
        </div>
      </div>

      <div className={`thank-you-container ${confirm}`}>
        <div className="img-cont"></div>
        <h1>Thank you!</h1>
        <p className="thanks-desc">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </>
  );
};

export default Fourth;
