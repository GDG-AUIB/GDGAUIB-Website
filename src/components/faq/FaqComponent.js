import React, { useState } from "react";
import "./FaqComponent.css";
import { Fade } from "react-reveal";

const FaqItem = ({ faq, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFaq = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div
        className="faq-question"
        style={{ color: theme.text }}
        onClick={toggleFaq}
      >
        {faq.question}
        <span className="faq-toggle">{isOpen ? "-" : "+"}</span>
      </div>
      <div
        className={`faq-answer-container ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "200px" : "0",
          color: theme.secondaryText,
        }}
      >
        <div className="faq-answer">{faq.answer}</div>
      </div>
    </div>
  );
};

const FaqComponent = ({ faqData, theme }) => {
  return (
    <div className="faq-div-main">
      <Fade bottom duration={1000} distance="40px">
        <div className="faq-header">
          <h1 className="faq-title" style={{ color: theme.text }}>
            {faqData.title}
          </h1>
          <p className="faq-subtitle" style={{ color: theme.secondaryText }}>
            {faqData.subtitle}
          </p>
        </div>
      </Fade>
      <Fade bottom duration={1000} distance="40px">
        <div className="faq-content">
          {faqData.questions.map((faq, index) => (
            <FaqItem key={index} faq={faq} theme={theme} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default FaqComponent;
