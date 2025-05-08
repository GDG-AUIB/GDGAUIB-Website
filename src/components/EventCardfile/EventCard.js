import React from "react";
import "./EventCard.css"; // Import your CSS file for styling

export const EventCard = ({
  title,
  date,
  location,
  attendees,
  isPast = false,
  link,
}) => {
  isPast = new Date(date) < new Date(); // Check if the event date is in the past

  if (isPast) {
    return null; // Do not render if the event is in the past
  }

  return (
    <div className={`event-card ${isPast ? "event-card-past" : ""}`}>
      <h3 className={`event-card-title ${isPast ? "text-gray-600" : ""}`}>
        {title}
      </h3>
      <div className="event-card-body">
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${isPast ? "icon-past" : "icon-date"}`}
          >
            📅 <span>{date}</span>
          </div>
        </div>
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${
              isPast ? "icon-past" : "icon-location"
            }`}
          >
            📍<span>{location}</span>
          </div>
        </div>
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${
              isPast ? "icon-past" : "icon-attendees"
            }`}
          >
            👥<span>{attendees} Attendees</span>
          </div>
        </div>
      </div>
      {!isPast && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="event-card-footer"
        >
          <button className="event-card-button">Register Now</button>
        </a>
      )}
    </div>
  );
};

export const PastEventCard = ({
  title,
  date,
  location,
  attendees,
  isPast = false,
  link,
}) => {
  isPast = new Date(date) < new Date(); // Check if the event date is in the past

  if (!isPast) {
    return null;
  }

  return (
    <div className={`event-card ${isPast ? "event-card-past" : ""}`}>
      <h3 className={`event-card-title ${isPast ? "text-gray-600" : ""}`}>
        {title}
      </h3>
      <div className="event-card-body">
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${isPast ? "icon-past" : "icon-date"}`}
          >
            📅 <span>{date}</span>
          </div>
        </div>
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${
              isPast ? "icon-past" : "icon-location"
            }`}
          >
            📍<span>{location}</span>
          </div>
        </div>
        <div className="event-card-detail">
          <div
            className={`event-card-icon ${
              isPast ? "icon-past" : "icon-attendees"
            }`}
          >
            👥<span>{attendees} Attendees</span>
          </div>
        </div>
      </div>
      {!isPast && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="event-card-footer"
        >
          <button className="event-card-button">Register Now</button>
        </a>
      )}
    </div>
  );
};
