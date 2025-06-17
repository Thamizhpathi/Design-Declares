import React, { useEffect, useRef, useState } from "react";
import "../styles/latestnewsstyle.css";

const LatestNewsComponent = () => {
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
    <div
      ref={donateRef}
      className={`donate-container slide-up ${visible ? "visible" : ""}`}
    >
      <div className="latestNews-container">
        <div className="latestNews-flex">
          <div className="latestNews-heading-first">
            <div className="headings1">
              <p>Latest</p>
            </div>
          </div>
          <div className="latestNews-component">
            <div className="top-row">
              <p>Events</p>
              <p>D!UK</p>
              <p>24.04.2025, 03 PM:30</p>
            </div>
            <div className="right-container">
              <div>
                SD4P Collective: How can Service Design drive meaningful
                sustainability impact
              </div>
              <div>
                <p>Recap: SD4P Collective working session – 28th March 2025</p>
                <a href="">Read Story</a>
              </div>
            </div>

            <div className="top-row" style={{ marginTop: "4rem" }}>
              <p>Events</p>
              <p>D!UK</p>
              <p>06.12.2024, 02 PM:30</p>
            </div>
            <div className="right-container">
              <div>
                Designing Tomorrow: Speculative Thinking Shapes Our Present
              </div>
              <div>
                <p>
                  Design Declares' November Event Challenges Perspectives on
                  Sustainability and Innovation
                </p>
                <a href="">Read Story</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsComponent;
