"use client";
import Header from "./Header";
import Filters from "./Filters";
import EventList from "./EventList";
import MainSection from "./MainSection";
import { EventProvider } from "./EventProvider";

export default function Home() {
  return (
    <EventProvider>
      <main className="min-h-screen flex flex-col items-center p-8 bg-backgroundPurple text-secondaryPurple">
        <Header />
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
