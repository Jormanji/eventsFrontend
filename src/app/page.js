"use client";
import { useState } from "react";
import Header from "./Header";
import Filters from "./Filters";
import EventList from "./EventList";
import { EventProvider } from "./EventProvider";
import { AuthProvider } from "./AuthProvider";

export default function Home() {
  const [viewAll, setViewAll] = useState(false); 


  const handleViewAllToggle = (isViewingAll) => {
    setViewAll(isViewingAll); 
  };

  return (
    <AuthProvider>
      <EventProvider>
        <Header />
        <main className="min-h-screen flex flex-col items-center p-8 bg-backgroundPurple text-secondaryPurple">
          <Filters onViewAllToggle={handleViewAllToggle} />

          <h2 className="text-3xl font-bold mb-4 text-center">
            {viewAll ? "All Events" : "Featured Events"}
          </h2>

          <EventList type={viewAll ? "all" : "featured"} />

          {!viewAll && (
            <>
              <h2 className="text-3xl font-bold mb-4 text-center mt-8">
                Upcoming Events
              </h2>
              <EventList type="upcoming" />
            </>
          )}
        </main>
      </EventProvider>
    </AuthProvider>
  );
}
