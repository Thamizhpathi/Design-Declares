import React, { useEffect, useRef, useState } from "react";
import "../styles/emergencyformstyle.css";
import { formData } from "../data/formData"; // Make sure formData includes .title and .input

const EmergencyFormComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const [consents, setConsents] = useState({
    dataConsent: false,
    newsletter: false,
  });
  const donateRef = useRef(null);
   const [visible, setVisible] = useState(false);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setVisible(true);
         }
       },
       { threshold: 0.1 }
     );
 
     if (donateRef.current) {
       observer.observe(donateRef.current);
     }
 
     return () => observer.disconnect();
   }, []);
  const handleCheckboxChange = (field) => {
    setConsents((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const handleSelect = (index) => {
    if (index !== selectedIndex) {
      setSelectedIndex(index);
    }
  };

  return (
     <div
        ref={donateRef}
        className={`donate-container slide-up ${visible ? "visible" : ""}`}
      >
    <div className="emergencyForm-container">
      <div className="emergencyForm-flex">
        <div className="emergencyForm-heading-first">
          <div className="headings">
            <p>Declare Emergency Now</p>
          </div>
        </div>

        <div className="emergencyForm-component">
          <div className="emergencyForm-heading">
            Design Declares is open to individuals and institutions working in
            industrial, digital, graphic, communication and service design...
          </div>

          <div className="emergencyForm-card">
            <p>I am Declaring Emergency</p>

            <div className="grid-container">
              {formData.map((label, index) => (
                <label className="checkbox-wrapper" key={index}>
                  <input
                    type="checkbox"
                    checked={selectedIndex === index}
                    onChange={() => handleSelect(index)}
                  />
                  <span
                    className={`custom-box ${
                      selectedIndex === index ? "checked" : ""
                    }`}
                  ></span>
                  <span className="label-text">{label.title}</span>
                </label>
              ))}
            </div>

            <div className="form-card">
              {selectedIndex !== null && (
                <div className="input-label-wrapper">
                  <label htmlFor="">{formData[selectedIndex].input}</label>
                  <input type="text" />
                </div>
              )}
              {selectedIndex !== null && formData[selectedIndex].input1 && (
                <div className="input-label-wrapper">
                  <label htmlFor="">{formData[selectedIndex].input1}</label>
                  <input type="text" />
                </div>
              )}

              <div className="input-label-wrapper">
                <label htmlFor="website">Website:*</label>
                <input type="text" id="website" name="website" />
              </div>

              <div className="input-label-wrapper">
                <label htmlFor="country">Country:*</label>
                <select id="country" name="country">
                  <option value="">Select a country</option>
                  <option value="india">India</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                </select>
              </div>

              <div className="input-label-wrapper">
                <label htmlFor="Discipline">Discipline:*</label>
                <select id="Discipline" name="Discipline">
                  <option value=""></option>
                  <option value="Communication Design">
                    Communication Design
                  </option>
                  <option value="Digital Design">Digital Design</option>
                  <option value="Service Design">Service Design</option>
                  <option value="Product Design">Product Design</option>
                </select>
              </div>

              <div className="input-label-wrapper">
                <label htmlFor="email">Email:*</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="input-label-wrapper">
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  placeholder="Why are you declaring? In a sentence or two, tell us why you're joining Design Declares"
                ></textarea>
              </div>
            </div>
            <div className="terms-box-area">
              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={consents.dataConsent}
                  onChange={() => handleCheckboxChange("dataConsent")}
                />
                <span
                  className={`custom-box ${
                    consents.dataConsent ? "checked" : ""
                  }`}
                ></span>
                <span className="label-text" >
                  I consent for my data to be used for the purpose of the
                  Declaration, and for my name and reason for joining to be used
                  in the promotion of the Declaration on this site and across
                  our social channels.
                </span>
              </label>

              <label className="checkbox-wrapper" style={{width:"100%"}}>
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
            </div>
            <div className="privacy-text">
              <p>View our Privacy Policy</p>
            </div>
             <div className="form-button">
              <a href="">Declare Emergency Now</a>
             </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmergencyFormComponent;
