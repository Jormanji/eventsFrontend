const EventCard = ({ event }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg text-secondaryPurple">
        <img src={event.logo.url} alt={event.name.text} className="rounded-lg mb-4 object-cover w-full h-80" />
        <h3 className="text-2xl font-semibold mb-2">{event.name.text}</h3>
        <p className="text-gray-700 mb-2">{event.description.text}</p>
        <p className="text-lg font-bold mb-4">
          {event.is_free ? (
            <span className="text-green-600">Free</span>
          ) : (
            event.ticket_classes && event.ticket_classes.length > 0
              ? `From $${(event.ticket_classes[0].cost.value / 100).toFixed(2)}`
              : "Price not available"
          )}
        </p>
        <p className="text-sm">
          {event.venue.name}, {event.venue.address.city}, {event.venue.address.address_1}
        </p>
        <a href={event.url} className="text-primaryPurple hover:underline">Learn More</a>
      </div>
    );
  };
  
  export default EventCard;
  