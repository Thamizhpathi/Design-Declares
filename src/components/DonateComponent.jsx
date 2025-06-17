import React, { useRef, useEffect, useState } from "react";
import "../styles/donatestyle.css";

const DonateComponent = () => {
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

  return (
    <>
      <div
        ref={donateRef}
        className={`donate-container slide-up ${visible ? "visible" : ""}`}
      >
        <div className="donate-flex">
          <div className="donate-heading-first">
            <div className="headings">
              <p>Donate to D!</p>
            </div>
          </div>
          <div className="donate-component">
            <div className="donate-heading">
              Design Declares is a CIC and would not exist without our dedicated
              team of co-steers, volunteers, and our passionate community
              working towards change in the creative industry. Your support can
              go a long way, and helps us too continue the valuable work needed
              in tackling the climate crises. If you believe in the work we do,
              please consider a small donation to help us on our journey for a
              more equitable and just planet.
            </div>
            <div className="donate-button-flex">
              <div className="donate-button">
                <a href="https://wise.com/pay/r/uZ5h3pxRMmTE_pk">Donate €10</a>
              </div>
              <div className="donate-button">
                <a href="https://wise.com/pay/r/u2IiQNt2ebixruk">Donate €20</a>
              </div>
              <div className="donate-button">
                <a href="https://wise.com/pay/r/2vqUbqPfU9hvVLE">Donate €50</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonateComponent;
