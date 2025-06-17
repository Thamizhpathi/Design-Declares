import React, { useEffect, useRef, useState } from "react";
import newsletterImage from "../assets/newsletter.png";
import "../styles/newsLetter.css";
const NewsLetterComponent = () => {
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

  return (
    <>
      <div
        ref={donateRef}
        className={`donate-container slide-up ${visible ? "visible" : ""}`}
      >
        <div className="newLetter-container">
          <div className="newLetter-flex">
            <div className="newLetter-heading-first">
              <div className="heading" style={{ height: "100%" }}>
                <p style={{ width: "80%" }}>
                  The Design Declares Newsletter and Toolkit
                </p>
              </div>
            </div>
            <div className="newLetter-component">
              <img src={newsletterImage} alt="" width={"100%"} />
              <div className="newsLetter-heading">
                Subscribe to the Design Declares UK newsletter to receive the
                latest news and updates. By signing up you will also gain access
                to The Design Declares Toolkit, a live and evolving Notion site
                co-created with our community. It is filled with the latest
                resources and methods to help you on your journey to
                climate-positive design.
              </div>
              <div>
                <p>
                  Every signatory to Design Declares will receive an access link
                  to the Toolkit. If you are unable to declare emergency quite
                  yet, you can still access the Toolkit - just register below.
                </p>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLetterComponent;
