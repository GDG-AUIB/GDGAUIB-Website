import React, { useState } from "react";
import "./EventHero.css";
import { Fade } from "react-reveal";
import { eventList } from "../../portfolio";
import { EventCard, PastEventCard } from "../../components/EventCard/EventCard";

export default function EventHero(props) {
  const theme = props.theme;
  //isPast = new Date(eventList.date) < new Date();
  const [activeTab, setActiveTab] = useState("upcoming");

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
          {eventList.map((event, index) =>
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
