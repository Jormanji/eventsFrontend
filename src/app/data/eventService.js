// eventService.js
import mockEventData from './mockEventData';

export async function fetchBookEvents() {
  // Filter out events where the category is 'Books'
  const bookEvents = mockEventData.events.filter(event => event.category.name === "Books");
  return bookEvents;
}

export function getLatestBookEvents(events) {
  // Sort and return the latest 3 book events
  const sortedEvents = events.sort((a, b) => new Date(b.start.local) - new Date(a.start.local));
  return sortedEvents.slice(0, 4);
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
