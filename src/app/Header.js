const Header = () => {
    return (
      <header className="w-full flex justify-between items-center py-4 px-8 bg-primaryPurple text-white">
        <div className="text-2xl font-bold">PageTurner</div>
        <nav className="hidden md:flex gap-4">
          <a href="#" className="hover:text-secondaryPurple">Home</a>
          <a href="#" className="hover:text-secondaryPurple">Event Details</a>
          <a href="#" className="hover:text-secondaryPurple">Contact</a>
          <a href="#" className="hover:text-secondaryPurple">Search...</a>
        </nav>
      </header>
    );
  };
  
  export default Header;
  