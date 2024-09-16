import { useEffect, useState, createContext, useContext } from "react";
import { fetchBookEvents, getLatestBookEvents, getFeaturedBookEvents } from "./data/eventService";
import { checkDateFilter } from "./DateUtils";

// Create a context for events
const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    async function loadEvents() {
      const bookEvents = await fetchBookEvents();
      setEvents(bookEvents);
      setFilteredEvents(bookEvents); // Initially show all events
    }
    loadEvents();
  }, []);

  useEffect(() => {
    setFilteredEvents(
      events.filter((event) => {
        return (
          (categoryFilter === "" || event.category.name === categoryFilter) &&
          (locationFilter === "" || event.venue.address.city === locationFilter || locationFilter === "Online") &&
          (languageFilter === "" || event.language === languageFilter) &&
          (dateFilter === "" || checkDateFilter(event, dateFilter))
        );
      })
    );
  }, [categoryFilter, locationFilter, languageFilter, dateFilter, events]);

  const handleFilterChange = (type, value) => {
    switch (type) {
      case "category":
        setCategoryFilter(value);
        break;
      case "location":
        setLocationFilter(value);
        break;
      case "language":
        setLanguageFilter(value);
        break;
      case "date":
        setDateFilter(value);
        break;
      default:
        break;
    }
  };

  const latestBookEvents = getLatestBookEvents(filteredEvents);
  const featuredBookEvents = getFeaturedBookEvents(filteredEvents);

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        latestBookEvents,
        featuredBookEvents,
        handleFilterChange,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
