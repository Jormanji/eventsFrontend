import { useEventContext } from "./EventProvider";
import EventCard from "./EventCard";

const EventList = ({ type }) => {
  const { filteredEvents, featuredBookEvents, latestBookEvents } = useEventContext();

  let eventsToDisplay = filteredEvents;
  if (type === "featured") eventsToDisplay = featuredBookEvents;
  if (type === "latest") eventsToDisplay = latestBookEvents;

  if (!eventsToDisplay || eventsToDisplay.length === 0) {
    return <p>No events available</p>;
  }

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4"
      style={{ gridAutoRows: "1fr" }} // Ensures all rows have equal height
    >
      {eventsToDisplay.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      {/* If fewer than 4 events, fill in empty grid spaces */}
      {eventsToDisplay.length < 4 && [...Array(4 - eventsToDisplay.length)].map((_, index) => (
        <div key={index} className="h-full w-full"></div> // Empty grid placeholders
      ))}
    </div>
  );
};

export default EventList;
