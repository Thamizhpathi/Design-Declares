import React, { useRef } from "react";
import countryData from "../data/countryData";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/globalSupporters.css";

const GlobalSupportersComponents = () => {
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
    const totalNames = countryData.reduce(
      (total, country) => total + country.names.length,
      0
    );

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCount(i);
      if (i >= totalNames) clearInterval(interval);
    }, 70 );

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div
        ref={donateRef}
        className={`donate-container slide-up ${visible ? "visible" : ""}`}
      >
        <div className="supporters-container">
          <div className="count-container">
            <div className="word-count">#{count}</div>
            <div className="word-count-heading">Global Supporters</div>
          </div>
          <div className="supporters-grid ">
            {countryData.map((countrydetails, index) => {
              const nameList = countrydetails.names;
              console.log(nameList);

              return (
                <div>
                  <div className="country-title">{countrydetails.country}</div>
                  <div key={index}>
                    {nameList.map((name, idx) => {
                      return (
                        <div className="supporters-item" key={idx}>
                          {name}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default GlobalSupportersComponents;
