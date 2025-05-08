import React from "react";
import "./EventHero.css";
import { Fade } from "react-reveal";
import { eventList } from "../../portfolio";
import EventCard from "../../components/events/EventCard";

export default function EventHero(props) {
  const theme = props.theme;

  return (
    <section id="EventHero">
      <div className="EventHero">
        <div className="EventHero-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="EventHero-header" style={{ color: theme.text }}>
              Upcoming Events
            </h1>
          </Fade>
        </div>
        <div className="EventHero-cards">
          {eventList.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              attendees={event.attendees}
              isPast={event.isPast}
              link={event.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
