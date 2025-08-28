import React from "react";
import "../../containers/EventHero/EventHero.css"; // reuse styles
import "./EventsPage.css";
import { Fade } from "react-reveal";
import { eventList } from "../../data/events";
import {
  EventCard,
  PastEventCard,
} from "../../components/EventCardfile/EventCard";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";

export default function EventsPage(props) {
  const theme = props.theme;

  const parseEventDate = (dateStr) => {
    if (!dateStr) return null;
    const parsed = Date.parse(dateStr);
    if (!isNaN(parsed)) return parsed;
    return null;
  };

  const now = Date.now();
  const eventsWithTs = eventList.map((e) => ({
    ...e,
    ts: parseEventDate(e.date),
  }));

  const upcoming = eventsWithTs
    .filter((e) => e.ts === null || e.ts >= now)
    .sort((a, b) => (a.ts || Infinity) - (b.ts || Infinity));
  const past = eventsWithTs
    .filter((e) => e.ts !== null && e.ts < now)
    .sort((a, b) => b.ts - a.ts);

  return (
    <div
      style={{
        width: "150vh",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header theme={props.theme} />

      <section id="EventsPage" style={{ flex: 1 }}>
        <div className="EventHero">
          <div className="EventsPage-hero">
            <h2 style={{ color: theme.text, marginTop: 8 }}>Upcoming Events</h2>
            <div className="EventHero-cards EventsPage-grid">
              {upcoming.map((event, index) => (
                <EventCard
                  key={`up-${index}`}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  attendees={event.attendees}
                  isPast={event.isPast}
                  link={event.link}
                />
              ))}
            </div>

            <h2 style={{ color: theme.text, marginTop: 24 }}>Past Events</h2>
            <div className="EventHero-cards EventsPage-grid">
              {past.map((event, index) => (
                <PastEventCard
                  key={`past-${index}`}
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
        </div>
      </section>

      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}
