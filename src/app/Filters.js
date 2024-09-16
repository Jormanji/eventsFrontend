import { useEventContext } from "./EventProvider";

const Filters = () => {
  const { events, handleFilterChange } = useEventContext();

  return (
    <div className="flex gap-4 mb-4">
      {/* Category Dropdown */}
      <div>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => handleFilterChange("category", e.target.value)}
        >
          <option value="">All Categories</option>
          {Array.from(new Set(events.map((event) => event.category.name))).map(
            (category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>

      {/* Location Dropdown */}
      <div>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => handleFilterChange("location", e.target.value)}
        >
          <option value="">All Locations</option>
          {Array.from(new Set(events.map((event) => event.venue.address.city))).map(
            (location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            )
          )}
        </select>
      </div>

      {/* Language Dropdown */}
      <div>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => handleFilterChange("language", e.target.value)}
        >
          <option value="">All Languages</option>
          {Array.from(new Set(events.map((event) => event.language))).map(
            (language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            )
          )}
        </select>
      </div>

      {/* Date Dropdown */}
      <div>
        <select
          className="border border-gray-300 rounded px-4 py-2"
          onChange={(e) => handleFilterChange("date", e.target.value)}
        >
          <option value="">All Dates</option>
          {["Upcoming this week", "This weekend", "Custom date range"].map(
            (date, index) => (
              <option key={index} value={date}>
                {date}
              </option>
            )
          )}
        </select>
      </div>
    </div>
  );
};

export default Filters;
