import React, { useEffect, useRef } from "react";
import "../styles/landingStyles.css";

const LandingComponents = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;

    const handleAnimationEnd = (e) => {
      if (e.animationName === "hideWard") {
        if (element && element.parentNode) {
          element.parentNode.removeChild(element); // remove from DOM
        }
      }
    };

    if (element) {
      element.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="landing-container">
        <div className="text-container first" ref={textRef}>
          <span>D</span>
          <span >!</span>
        </div>
        <div className="second-flex">
          <div className="typewriter second">
            <span>Design</span>
          </div>
          <div className="typewriter second">
            <span>Declares</span>
          </div>
          <div className="typewriter second">
            <span>UK</span>
          </div>
        </div>
        <div className="about-container">
          <p>
            Design Declares is a growing group of designers, design studios,
            agencies and institutions here to declare a climate and ecological
            emergency. As part of the global declaration movement, we commit to
            harnessing the tools of our industry to reimagine, rebuild and heal
            our world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingComponents;
