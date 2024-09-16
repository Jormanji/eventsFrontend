export const checkDateFilter = (event, dateFilter) => {
  const eventDate = new Date(event.start.local); // Parse event date from event data
  const now = new Date();
  
  console.log('Event Date:', eventDate); // Log event dates
  console.log('Date Filter:', dateFilter); // Log the date filter applied
  
  switch (dateFilter) {
    case "Upcoming this week":
      const weekLater = new Date();
      weekLater.setDate(now.getDate() + 7);
      console.log('Upcoming This Week - Now:', now, 'Week Later:', weekLater);
      return eventDate >= now && eventDate <= weekLater;

    case "This weekend":
      const dayOfWeek = now.getDay();
      const weekendStart = new Date(now);
      const weekendEnd = new Date(now);

      if (dayOfWeek <= 5) {
        weekendStart.setDate(now.getDate() + (5 - dayOfWeek)); // Start on Friday
      } else {
        weekendStart.setDate(now.getDate() + (12 - dayOfWeek)); // Start next Friday
      }

      weekendEnd.setDate(weekendStart.getDate() + 2); // End on Sunday
      console.log('This Weekend - Start:', weekendStart, 'End:', weekendEnd);
      return eventDate >= weekendStart && eventDate <= weekendEnd;

    default:
      return true;
  }
};
