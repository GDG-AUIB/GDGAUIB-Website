import React from "react";
import "./EventCard.css";

export default function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-card-header">
        <h2 className="event-card-title">{event.title}</h2>
        <p className="event-card-date">{event.date}</p>
      </div>
      <div className="event-card-body">
        <p className="event-card-location">{event.location}</p>
        <p className="event-card-attendees">{event.attendees} attendees</p>
      </div>
      <div className="event-card-footer">
        <a
          href={event.link}
          className="event-card-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
