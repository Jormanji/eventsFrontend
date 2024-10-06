export const checkDateFilter = (event, dateFilter) => {
  if (!event || !event.start || !event.start.local) {
    console.error("Invalid event structure:", event);
    return false;
  }

  const eventDate = new Date(event.start.local); 
  const now = new Date();

  console.log('Event Date:', eventDate); 
  console.log('Date Filter:', dateFilter);

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

      // Calculate the start of the weekend based on the current day
      if (dayOfWeek <= 5) {
        weekendStart.setDate(now.getDate() + (5 - dayOfWeek)); 
      } else {
        weekendStart.setDate(now.getDate() + (12 - dayOfWeek));
      }

      weekendEnd.setDate(weekendStart.getDate() + 2); 
      console.log('This Weekend - Start:', weekendStart, 'End:', weekendEnd);
      return eventDate >= weekendStart && eventDate <= weekendEnd;

    default:
      return true;
  }
};
