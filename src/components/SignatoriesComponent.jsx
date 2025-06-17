import React, { useEffect, useRef, useState } from "react";
import { SignatoriesData } from "../data/signatories";
import "../styles/signatoriesstyle.css";
const SignatoriesComponent = () => {
  const [count, setCount] = useState(0);
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
  useEffect(() => {
    let i = 0;
    const target = SignatoriesData.length;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i === target) clearInterval(interval);
    }, 0.2);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        ref={donateRef}
        className={`donate-container slide-up ${visible ? "visible" : ""}`}
      >
        <div className="signatories-container">
          <div className="count-container">
            <div className="word-count">#{count}</div>
            <div className="word-count-heading">
              Signatories and Counting in <span>D! UK</span>
            </div>
          </div>
          <div className="signatories-grid">
            {SignatoriesData.map((name, index) => {
              return (
                <div key={index} className="item">
                  {name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignatoriesComponent;
