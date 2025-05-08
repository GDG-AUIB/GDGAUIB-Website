import React, { useState } from "react";
import "./ConstructionAlert.css";

export default function ConstructionAlert() {
  const [isVisible, setIsVisible] = useState(true);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      -y / 20
    }deg) rotateY(${x / 20}deg)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    isVisible && (
      <div className="construction-alert-popup">
        <div
          className="construction-alert-content"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <h2>🚧 Website Under Construction 🚧</h2>
          <p>
            We're working hard to bring you a better experience. Please check
            back soon!
          </p>
          <button className="close-button" onClick={closePopup}>
            Close
          </button>
        </div>
      </div>
    )
  );
}
