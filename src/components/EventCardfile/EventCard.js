import React from "react";
import "./EventCard.css"; // Import your CSS file for styling

// Helper to create a URL-friendly slug from an event title
function slugify(str) {
  if (!str) return "event";
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

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
        {attendees != null && (
          <div className="event-card-detail">
            <div
              className={`event-card-icon ${
                isPast ? "icon-past" : "icon-attendees"
              }`}
            >
              👥<span>{attendees} Attendees</span>
            </div>
          </div>
        )}
      </div>
      {!isPast && link && (
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

  const slug = slugify(title);

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
        {attendees != null && (
          <div className="event-card-detail">
            <div
              className={`event-card-icon ${
                isPast ? "icon-past" : "icon-attendees"
              }`}
            >
              👥<span>{attendees} Attendees</span>
            </div>
          </div>
        )}
      </div>
      {/* For past events show an outcome page link instead of register */}
      <a href={`/events/${slug}`} className="event-card-footer">
        <button className="event-card-button">View Outcome</button>
      </a>
    </div>
  );
};
