import React from "react";
import EventCard from "../EventCardfile/EventCard";
import { events } from "../../portfolio";

const Events = () => {
  return (
    <div className="px-10 py-20">
      <h1 className="text-4xl font-bold mb-10">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Events;
