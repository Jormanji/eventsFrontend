"use client"; 

import Link from "next/link";
import { useUserContext } from "./userContext"; 

const Header = () => {
  const { user, logout } = useUserContext(); 
  console.log("Current user in Header:", user);

  return (
    <header className="w-full flex justify-between items-center py-4 px-8 bg-primaryPurple text-white">
      <div className="text-2xl font-bold">PageTurner</div>
      
      <nav className="hidden md:flex gap-4">
        <Link href="/" className="hover:text-secondaryPurple">Home</Link>
        <Link href="/HostEvent" className="hover:text-secondaryPurple">Host Event</Link>
        
        {/* Conditional rendering based on user login status */}
        {user ? (
          <>
            <span className="hover:text-secondaryPurple">{user.username}</span>
            <button onClick={logout} className="hover:text-secondaryPurple">Log Out</button>
          </>
        ) : (
          <>
            <Link href="/login" className="hover:text-secondaryPurple">Log In</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
