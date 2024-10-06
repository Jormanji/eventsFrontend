"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserContext } from "../userContext";
import AddEventForm from "../AddEventForm";
import Footer from "../Footer";
import Header from "../Header";

const HostEventPage = () => {
  const { user } = useUserContext();
  const router = useRouter();

  // Redirect to the login page if the user is not logged in
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  // Render the HostEventPage only if the user is logged in
  return user ? (
    <div>
      <Header />
      <div className="min-h-screen flex flex-col items-center p-8 bg-backgroundPurple text-secondaryPurple">
        <h1 className="text-3xl font-bold mb-4">Host Your Event</h1>
        <AddEventForm />
      </div>
      <Footer />
    </div>
  ) : null;
};

export default HostEventPage;
 