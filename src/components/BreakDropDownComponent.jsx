import React, { useState } from "react";
import { dropdownTitle, dropdownContent } from "../data/dropdowndata";
import { ChevronDown } from "lucide-react";
import "../styles/breakDown.css";

const BreakDropDownComponent = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleDropdown = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="dropdown-component">
      <div className="dropdown-heading">
        The science is settled. We are in an emergency of climate and nature.
        The world is past breaking point; the breakdown has begun...
      </div>
      <div className="dropdown">
        {dropdownTitle.map((title, index) => (
          <div
            className={`dropdown-toggle ${
              openIndexes.includes(index) ? "active" : ""
            }`}
            key={index}
            onClick={() => toggleDropdown(index)}
          >
            <div className="dropdown-title">
              {title}
              <span
                className={`dropdown-icon ${
                  openIndexes.includes(index) ? "rotate" : ""
                }`}
              >
                <ChevronDown />
              </span>
            </div>

            <div
              className={`dropdown-content ${
                openIndexes.includes(index) ? "show" : ""
              }`}
            >
              {dropdownContent[index].map((item, idx) => (
                <p className="dropdown-column " key={idx}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="intro-button">
        <a
          href="https://youtu.be/XpnOe94eXdM?si=qDe5T2anRSX2bB2x"
          target="blank"
        >
          View our D! Intro video
        </a>
      </div>
    </div>
  );
};

export default BreakDropDownComponent;
