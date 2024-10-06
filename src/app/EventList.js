import { useEventContext } from "./EventProvider";
import EventCard from "./EventCard"; 

const EventList = ({ type }) => {
  const { filteredEvents, events } = useEventContext(); 

  let displayedEvents = [...filteredEvents]; 

  const getMaxTicketPrice = (event) => {
    if (event.ticketClasses && event.ticketClasses.length > 0) {
      return Math.max(
        ...event.ticketClasses.map((ticketClass) => ticketClass.cost?.value || 0)
      );
    }
    return 0;
  };

  // Apply additional filtering for 'featured', 'upcoming', or 'all' types AFTER other filters
  if (type === "featured") {
    displayedEvents = displayedEvents
      .filter((event) => getMaxTicketPrice(event) > 0) 
      .sort((a, b) => getMaxTicketPrice(b) - getMaxTicketPrice(a)) 
      .slice(0, 4); 
  } else if (type === "upcoming") {
    // Sort by start date and limit to top 4
    displayedEvents = displayedEvents
      .filter((event) => new Date(event.startDate) > new Date()) 
      .sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) 
      .slice(0, 4); // Get top 4
  } else if (type === "all") {

    displayedEvents = [...events].sort(
      (a, b) => new Date(a.startDate) - new Date(b.startDate)
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {displayedEvents.length > 0 ? (
        displayedEvents.map((event) => <EventCard key={event._id} event={event} />)
      ) : (
        <p>No events available</p>
      )}
    </div>
  );
};

export default EventList;
