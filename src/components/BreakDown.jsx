import React, { useEffect, useRef, useState } from "react";
import "../styles/breakDown.css";
import BreakDropDownComponent from "./BreakDropDownComponent";

const BreakDown = () => {
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
      <div className="breakdown-container">
        <div className="breakdown-flex">
          <div className="breakdown-heading">
            <div className="heading">
              <p>This is Breakdown</p>
            </div>
          </div>
        <BreakDropDownComponent/> 
        </div>
      </div>
      </div>

      
    </>
  );
};

export default BreakDown;
