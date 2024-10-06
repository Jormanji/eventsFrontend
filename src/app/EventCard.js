import React, { useState, useEffect } from "react";
import { useUserContext } from "./userContext";

const EventCard = ({ event }) => {
  const logoUrl = event.logo?.url || "/Default-Image.jpg";
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [eventLink, setEventLink] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [signupsCount, setSignupsCount] = useState(event.signups?.length || 0);
  const { user } = useUserContext();

  const signups = event.signups || [];

  // Check if the user has already signed up for the event
  useEffect(() => {
    if (user && signups.includes(user.username)) {
      setSignedUp(true);
    }
  }, [user, signups]);

  const startDate = event.startDate ? new Date(event.startDate) : "Invalid Date";
  const endDate = event.endDate ? new Date(event.endDate) : "Invalid Date";

  // Format the date to UK format (DD/MM/YY)
  const formatDateToUK = (date) => {
    if (date !== "Invalid Date") {
      return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      });
    }
    return "Invalid Date";
  };

  // Handle user sign-up for event
  const handleSignup = async () => {
    if (!user) {
      alert("You need to be logged in to sign up.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/events/signup/${event._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSignedUp(true);
        setSignupsCount(data.signupsCount);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error signing up for event:", error);
    }
  };

  // Check Google authentication
  const checkGoogleAuth = async () => {
    const response = await fetch("http://localhost:5000/auth/check-google-auth", {
      method: "GET",
      credentials: "include",
    });
    if (response.status === 401) {
      window.location.href = "http://localhost:5000/auth/google";
      return false;
    }
    return true;
  };

  // Handle the process of adding the event to Google Calendar
  const handleAddToCalendarClick = async () => {
    const isGoogleAuthenticated = await checkGoogleAuth();
    if (!isGoogleAuthenticated) return;
    setShowConfirmation(true);
  };

  const addToGoogleCalendar = async () => {
    try {
      const response = await fetch("http://localhost:5000/calendar/insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: event.name,
          location: event.location?.address || "Location not available",
          description: event.description || "No description available",
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
        }),
      });

      const data = await response.json();

      if (response.status === 401 && data.redirect) {
        window.location.href = `http://localhost:5000${data.redirect}`;
        return;
      }

      if (response.ok) {
        setEventLink(data.eventLink); 
        setMessage("Event added to your Google Calendar!");
      } else {
        setMessage("Failed to add event to Google Calendar.");
      }
    } catch (error) {
      console.error("Error adding event to Google Calendar:", error);
      setMessage("Error adding event to Google Calendar.");
    }
  };

  const handleConfirmYes = () => {
    setShowConfirmation(false);
    addToGoogleCalendar();
  };

  const handleConfirmNo = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-secondaryPurple h-full flex flex-col justify-between w-full max-w-[300px]">
      <img
        src={logoUrl}
        alt={event.name || "Event Image"}
        className="rounded-lg mb-4 object-cover w-full h-48"
      />
      <h3 className="text-2xl font-semibold mb-2">{event.name || "No name available"}</h3>
      <p className="text-gray-700 mb-2 flex-grow">{event.description || "No description available."}</p>
      <p className="text-lg font-bold mb-4">
        {event.isFree ? (
          <span className="text-green-600">Free</span>
        ) : event.ticketClasses && event.ticketClasses.length > 0 ? (
          `From ${event.ticketClasses[0].cost.currency} ${(event.ticketClasses[0].cost.value / 100).toFixed(2)}`
        ) : (
          "Price not available"
        )}
      </p>
      <p className="text-sm">Signups: {signupsCount}</p>
      <p className="text-sm">Location: {event.location?.address || "Address not available"}</p>
      <p className="text-sm">Start: {formatDateToUK(startDate)}</p>
      <p className="text-sm">End: {formatDateToUK(endDate)}</p>
      <a href={event.url || "#"} className="text-primaryPurple hover:underline">
        Learn More
      </a>

      {/* Signup or Add to Google Calendar Button */}
      {!signedUp ? (
        <div className="mt-4">
          <button
            onClick={handleSignup}
            className="bg-primaryPurple text-white px-4 py-2 rounded hover:bg-secondaryPurple w-full"
          >
            Sign Up
          </button>
        </div>
      ) : (
        <div className="mt-4">
          <button
            onClick={handleAddToCalendarClick}
            className="bg-primaryPurple text-white px-4 py-2 rounded hover:bg-secondaryPurple w-full"
          >
            Add to Google Calendar
          </button>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="mt-4 p-4 border rounded bg-gray-200">
          <p>Are you sure you want to add this event to your Google Calendar?</p>
          <div className="mt-2 flex justify-between">
            <button
              onClick={handleConfirmYes}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Yes
            </button>
            <button
              onClick={handleConfirmNo}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              No
            </button>
          </div>
        </div>
      )}

      {/* Success Message */}
      {message && (
        <div className="mt-2 text-green-600">
          <p>{message}</p>
          {eventLink && (
            <button
              className="mt-2 bg-primaryPurple text-white px-4 py-2 rounded hover:bg-secondaryPurple"
              onClick={() => window.open(eventLink, "_blank")}
            >
              View Event in Calendar
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default EventCard;
