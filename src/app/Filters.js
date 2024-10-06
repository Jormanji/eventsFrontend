import { useState } from "react";
import { useEventContext } from "./EventProvider";

const Filters = ({ onViewAllToggle }) => {
  const { events, handleFilterChange } = useEventContext();
  const [isViewingAll, setIsViewingAll] = useState(false); 

  const handleToggleView = () => {
    setIsViewingAll((prev) => !prev); 
    onViewAllToggle(!isViewingAll); 
  };

  // Filter out any undefined, null, or empty values for category, location, and language
  const uniqueCategories = Array.from(
    new Set(events.map((event) => event.category).filter(Boolean))
  );
  
  const uniqueCities = Array.from(
    new Set(events.map((event) => event.location?.city).filter(Boolean))
  );
  
  const uniqueLanguages = Array.from(
    new Set(events.map((event) => event.language).filter(Boolean))
  );

  return (
    <div className="mb-4">
      <div className="flex justify-center mb-4">
        <button
          onClick={handleToggleView}
          className="bg-primaryPurple text-white px-4 py-2 rounded"
        >
          {isViewingAll ? "Filter events" : "View all events"}
        </button>
      </div>

      {!isViewingAll && (
        <div className="flex gap-4 mb-4">
          {/* Category Dropdown */}
          <div>
            <select
              className="border border-gray-300 rounded px-4 py-2"
              onChange={(e) => handleFilterChange("category", e.target.value)}
            >
              <option value="">All Categories</option>
              {uniqueCategories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* City Dropdown */}
          <div>
            <select
              className="border border-gray-300 rounded px-4 py-2"
              onChange={(e) => handleFilterChange("location", e.target.value)}
            >
              <option value="">All Locations</option>
              {uniqueCities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Language Dropdown */}
          <div>
            <select
              className="border border-gray-300 rounded px-4 py-2"
              onChange={(e) => handleFilterChange("language", e.target.value)}
            >
              <option value="">All Languages</option>
              {uniqueLanguages.map((language, index) => (
                <option key={index} value={language}>
                  {language}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
