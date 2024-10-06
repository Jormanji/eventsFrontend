import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch all events
export const fetchEvents = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/events");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching events:", error);
  }
};



// Create a new event
export const createEvent = async (eventData) => {
  const response = await axios.post(`${API_URL}/events`, eventData);
  return response.data;
};

// Update an existing event
export const updateEvent = async (eventId, updatedData) => {
  const response = await axios.patch(`${API_URL}/events/${eventId}`, updatedData);
  return response.data;
};

// Delete an event
export const deleteEvent = async (eventId) => {
  const response = await axios.delete(`${API_URL}/events/${eventId}`);
  return response.data;
};
