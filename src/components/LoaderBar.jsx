import React, { useEffect } from "react";

const LoaderBar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      const scrollBar = document.getElementById("scrollBar");
      if (scrollBar) {
        scrollBar.style.width = scrollPercent + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-container">
      <div className="scroll-progress-bar" id="scrollBar"></div>
    </div>
  );
};

export default LoaderBar;
