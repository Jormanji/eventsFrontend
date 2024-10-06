import { useEffect, useState, createContext, useContext } from "react";
import { checkDateFilter } from "./DateUtils";
import { fetchEvents } from "./data/api";

const EventContext = createContext();

export const useEventContext = () => useContext(EventContext);

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [featuredEvents, setFeaturedEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [languageFilter, setLanguageFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchEvents();
        console.log("Fetched events:", data);
        setEvents(data);
        setFilteredEvents(data);
  
        // Calculate Featured Events (4 most expensive events based on highest ticket price)
        const expensiveEvents = [...data]
          .filter((event) => {
            const hasTickets = event.ticketClasses && event.ticketClasses.length > 0;
            if (!hasTickets) {
              console.log(`Event ${event.name} has no ticket classes, skipping...`);
            }
            return hasTickets; 
          })
          .map((event) => {
            const maxPrice = Math.max(...event.ticketClasses.map(ticket => ticket.cost.value));
            console.log(`Event ${event.name} max ticket price: ${maxPrice}`); 
            return { ...event, maxPrice }; 
          })
          .sort((a, b) => b.maxPrice - a.maxPrice) 
          .slice(0, 4); 
  
        console.log("Most expensive events:", expensiveEvents);
        setFeaturedEvents(expensiveEvents);
  
        // Calculate Upcoming Events (4 closest to today's date)
        const currentDate = new Date();
        const upcoming = [...data]
          .filter((event) => new Date(event.startDate) >= currentDate) 
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate)) 
          .slice(0, 4); 
  
        console.log("Upcoming events:", upcoming); 
        setUpcomingEvents(upcoming);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    }
    loadEvents();
  }, []);
  
  

  useEffect(() => {
    const filtered = events.filter((event) => {
      return (
        (categoryFilter === "" || event.category === categoryFilter) &&
        (locationFilter === "" || event.location?.city === locationFilter) &&
        (dateFilter === "" || checkDateFilter(event, dateFilter))
      );
    });

    setFilteredEvents(filtered);
  }, [categoryFilter, locationFilter, dateFilter, events]);

  const handleFilterChange = (type, value) => {
    switch (type) {
      case "category":
        setCategoryFilter(value);
        break;
      case "location":
        setLocationFilter(value);
        break;
      case "date":
        setDateFilter(value);
        break;
      default:
        break;
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        filteredEvents,
        featuredEvents,
        upcomingEvents,
        handleFilterChange,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
