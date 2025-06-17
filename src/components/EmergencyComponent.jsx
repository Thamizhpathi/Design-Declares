import React, { useEffect, useRef, useState } from "react";
import "../styles/emergency.css";
import { emergencyTitle } from "../data/emergencydata";

const EmergencyComponent = () => {
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
        <div className="emergency-container">
          <div className="emergency-flex">
            <div className="emergency-heading-first">
              <div className="headings">
                <p>8 Acts of Emergency</p>
              </div>
            </div>
            <div className="emergency-component">
              <div className="emergency-heading">
                What does it take to Declare? It’s accepting we are in an
                emergency of climate and nature, and a commitment to do
                something about it. Here are eight places to start:
              </div>
              <div className="emergency-card">
                {emergencyTitle.map((data, index) => {
                  return (
                    <div key={index}>
                      <div className="each-card">
                        <p>{index}</p>
                        <p>{data.title}</p>
                      </div>
                      <div className="emergency-content">
                        <p>{data.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmergencyComponent;
