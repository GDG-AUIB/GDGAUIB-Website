import React, { useState } from "react";
import "./EventHero.css";
import { Fade } from "react-reveal";
import { eventList } from "../../data/events";
import { EventCard } from "../../components/EventCardfile/EventCard.js";
import { PastEventCard } from "../../components/EventCardfile/EventCard.js";

export default function EventHero(props) {
  const theme = props.theme;
  //isPast = new Date(eventList.date) < new Date();
  const [activeTab, setActiveTab] = useState("upcoming");

  // Helper to parse a date string; returns timestamp (ms) or null if unparseable
  const parseEventDate = (dateStr) => {
    if (!dateStr) return null;
    // try to parse common formats
    const parsed = Date.parse(dateStr);
    if (!isNaN(parsed)) return parsed;
    // handle formats like 'Feb 17, 2024' which Date.parse handles; otherwise return null
    return null;
  };

  const now = Date.now();
  const eventsWithTs = eventList.map((e) => ({
    ...e,
    ts: parseEventDate(e.date),
  }));

  // Upcoming: those with ts === null (unparseable => coming soon) or ts >= now
  // Sort ascending by timestamp (closest first); treat null as Infinity so it falls last
  const upcomingEvents = eventsWithTs
    .filter((e) => e.ts === null || e.ts >= now)
    .sort((a, b) => (a.ts || Infinity) - (b.ts || Infinity))
    .slice(0, 2);

  // Past: those with a timestamp and ts < now; sort newest-first
  const pastEvents = eventsWithTs
    .filter((e) => e.ts !== null && e.ts < now)
    .sort((a, b) => b.ts - a.ts);

  return (
    <section id="EventHero">
      <div className="EventHero">
        <div className="EventHero-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="EventHero-header" style={{ color: theme.text }}>
              {activeTab === "upcoming" ? "Upcoming Events" : "Past Events"}
            </h1>
          </Fade>
        </div>
        <div className="EventHero-tabs">
          <button
            className={`EventHero-tab ${
              activeTab === "upcoming" ? "active" : ""
            }`}
            onClick={() => setActiveTab("upcoming")}
          >
            Upcoming Events
          </button>
          <button
            className={`EventHero-tab ${activeTab === "past" ? "active" : ""}`}
            onClick={() => setActiveTab("past")}
          >
            Past Events
          </button>
        </div>
        <div className="EventHero-cards">
          {(activeTab === "upcoming"
            ? upcomingEvents
            : pastEvents
          ).map((event, index) =>
            activeTab === "upcoming" ? (
              <EventCard
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                attendees={event.attendees}
                isPast={event.isPast}
                link={event.link}
              />
            ) : (
              <PastEventCard
                key={index}
                title={event.title}
                date={event.date}
                location={event.location}
                attendees={event.attendees}
                isPast={event.isPast}
                link={event.link}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}
