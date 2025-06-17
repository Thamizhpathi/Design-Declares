import React, { useState } from "react";
import "../styles/footerstyle.css";

const Footer = () => {
  const [consents, setConsents] = useState({
    dataConsent: false,
    newsletter: false,
  });
  const handleCheckboxChange = (field) => {
    setConsents((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  return (
    <>
      <div className="footer-container">
        <div className="footer-flex">
          <div className="logo-wrapper">
            <div className="logo">Design Declares</div>
          </div>
          <div className="inner-container">
            <div className="social-media-container">
              <p>Contact</p>
              <p>Instagram</p>
              <p>LinkedIn</p>
              <p>Privacy Policy</p>
            </div>
            <div className="footer-form">
              <p>Sign up to the D! Newsletter</p>
              <div className="input-label-wrapper1">
                <label htmlFor="email">Email:*</label>
                <input type="email" id="email" name="email" />
              </div>
              <label className="checkbox-wrapper" style={{ width: "100%" }}>
                <input
                  type="checkbox"
                  checked={consents.newsletter}
                  onChange={() => handleCheckboxChange("newsletter")}
                />
                <span
                  className={`custom-box ${
                    consents.newsletter ? "checked" : ""
                  }`}
                ></span>
                <span className="label-text">
                  I would like to be added to the Design Declares! newsletter
                  and receive further updates.
                </span>
              </label>
              <p>
                {" "}
                <a href="">View our Privacy Policy</a>
              </p>
              <div className="form-button">
                <a href="">Subscribe</a>
              </div>
            </div>
            <p className="about-text">
              This website has been built following low-carbon principles of web
              development and hosted using serverless computing, by only
              allocating energy when needed and on demand.{" "}
              <a href=""> Learn more about our carbon footprint.</a>
            </p>
            <p className="about-text">
              {" "}
              <a href=""> Empowered by Driftime@</a>
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Footer;
