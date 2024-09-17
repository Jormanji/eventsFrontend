"use client";
import Header from "./Header";
import Filters from "./Filters";
import EventList from "./EventList";
import MainSection from "./MainSection";
import { EventProvider } from "./EventProvider";
import AddEventForm from "./AddEventForm";
import { useState } from "react";

export default function Home() {
  const [isHosting, setIsHosting] = useState(false); // State to manage form visibility

  const toggleHostEvent = () => {
    setIsHosting((prevIsHosting) => !prevIsHosting); // Toggle the form visibility
  };

  return (
    <EventProvider>
      <main className="min-h-screen flex flex-col items-center p-8 bg-backgroundPurple text-secondaryPurple">
        <Header onHostEventClick={toggleHostEvent} /> {/* Pass the toggle function */}
        
        {isHosting && <AddEventForm />} {/* Conditionally show the form */}
        
        <MainSection />
        <Filters />
        <h2 className="text-3xl font-bold mb-4 text-center">Featured Events</h2>
        <EventList type="featured" />
        <h2 className="text-3xl font-bold mb-4 text-center">Latest Events</h2>
        <EventList type="latest" />
      </main>
    </EventProvider>
  );
}
