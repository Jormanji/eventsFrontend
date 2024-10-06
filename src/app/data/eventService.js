import { fetchEvents } from './api'; 

export async function fetchBookEvents() {
  try {
    const events = await fetchEvents(); 
    if (!events || !Array.isArray(events)) {
      throw new Error("Invalid events data");
    }
    // Filter out events where the category is 'Books'
    const bookEvents = events.filter(event => event.category?.name === "Books");
    return bookEvents;
  } catch (error) {
    console.error("Error fetching book events:", error);
    return [];
  }
}

export function getLatestBookEvents(events) {
  // Sort and return the latest 3 book events using startDate
  const sortedEvents = events.sort((a, b) => 
    new Date(b.startDate) - new Date(a.startDate)
  );
  return sortedEvents.slice(0, 3);
}

export function getFeaturedBookEvents(events) {
  // Sort and return the most expensive 3 book events
  const featuredEvents = events
    .filter(event => event.ticket_classes && event.ticket_classes.length > 0)
    .sort((a, b) => {
      const priceA = a.ticket_classes[0].cost ? a.ticket_classes[0].cost.value : 0;
      const priceB = b.ticket_classes[0].cost ? b.ticket_classes[0].cost.value : 0;
      return priceB - priceA;
    })
    .slice(0, 4);

  return featuredEvents;
}
