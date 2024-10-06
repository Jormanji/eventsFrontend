import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useUserContext } from "./userContext";
import { useRouter } from "next/navigation";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const libraries = ['places'];

const AddEventForm = () => {
  const router = useRouter();
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState({ lat: center.lat, lng: center.lng });
  const [address, setAddress] = useState("");
  const [city, setCity] = useState(""); 
  const [language, setLanguage] = useState("English");
  const [category, setCategory] = useState(""); 
  const [description, setDescription] = useState(""); 
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const { user } = useUserContext();

  const handleCheckboxChange = (e) => {
    setIsFree(e.target.checked);
    if (e.target.checked) {
      setPrice("");
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setPrice(value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      setErrorMessage("You need to be logged in to create an event.");
      return;
    }
  
    const eventData = {
      name: e.target.eventName.value,
      category,
      description,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      isFree,
      price,
      currency: "GBP",
      address,
      city,
      location,
      language,
      createdBy: user.username,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
      });
  
      if (response.ok) {
        setSuccessMessage("Event created successfully!"); 
        setTimeout(() => {
          router.push('/');
        }, 2000);
      } else {
        setErrorMessage("Failed to create the event.");
      }
    } catch (error) {
      setErrorMessage("Error creating the event. Please try again.");
    }
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setLocation({ lat, lng });

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === 'OK' && results[0]) {
        setAddress(results[0].formatted_address);
      } else {
        setErrorMessage("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Host an Event</h2>

      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
      {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>} 

      <div className="mb-4">
        <label htmlFor="eventName" className="block text-sm font-bold mb-2">Event Name</label>
        <input type="text" id="eventName" name="eventName" className="w-full p-2 border border-gray-300 rounded" required />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block text-sm font-bold mb-2">Event Category</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange} className="w-full p-2 border border-gray-300 rounded" required>
          <option value="">Select a category</option>
          <option value="Book Signings">Book Signings</option>
          <option value="Book Launches">Book Launches</option>
          <option value="Book Clubs">Book Clubs</option>
          <option value="Author Talks">Author Talks</option>
          <option value="Literary Festivals">Literary Festivals</option>
          <option value="Writing Workshops">Writing Workshops</option>
          <option value="Poetry Readings">Poetry Readings</option>
          <option value="Storytime">Storytime</option>
          <option value="Book Fairs">Book Fairs</option>
          <option value="Panel Discussions">Panel Discussions</option>
          <option value="Creative Writing Classes">Creative Writing Classes</option>
          <option value="Reading Marathons">Reading Marathons</option>
          <option value="Library Events">Library Events</option>
          <option value="Book Swaps">Book Swaps</option>
          <option value="Genre-Specific Discussions">Genre-Specific Discussions</option>
          <option value="Literary Awards Ceremonies">Literary Awards Ceremonies</option>
          <option value="Illustrator Talks">Illustrator Talks</option>
          <option value="Self-Publishing Workshops">Self-Publishing Workshops</option>
          <option value="Translation Workshops">Translation Workshops</option>
          <option value="Bookbinding and Preservation">Bookbinding and Preservation</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-bold mb-2">Event Description</label>
        <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} className="w-full p-2 border border-gray-300 rounded" required />
      </div>

      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-bold mb-2">Start Date and Time</label>
        <input type="datetime-local" id="startDate" name="startDate" className="w-full p-2 border border-gray-300 rounded" min="1900-01-01T00:00" 
          max="2099-12-31T23:59" required />
      </div>

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-bold mb-2">End Date and Time</label>
        <input type="datetime-local" id="endDate" name="endDate" className="w-full p-2 border border-gray-300 rounded" min="1900-01-01T00:00" 
          max="2099-12-31T23:59" required />
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-bold mb-2">Event Address</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded" 
          placeholder="Enter address" 
          required 
        />
      </div>

      {isLoaded && (
        <div className="mb-4">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={location}
            zoom={10}
            onClick={handleMapClick}
          >
            <Marker position={location} />
          </GoogleMap>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-bold mb-2">Event Language</label>
        <select 
          id="language" 
          name="language" 
          value={language} 
          onChange={(e) => setLanguage(e.target.value)} 
          className="w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Chinese">Chinese</option>
          <option value="Japanese">Japanese</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          <input type="checkbox" checked={isFree} onChange={handleCheckboxChange} className="mr-2" />
          Is the event free?
        </label>
      </div>

      {!isFree && (
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-bold mb-2">Price (in GBP)</label>
          <input 
            type="text" 
            id="price" 
            name="price" 
            value={price} 
            onChange={handlePriceChange} 
            className="w-full p-2 border border-gray-300 rounded" 
            placeholder="Enter price"
            required={!isFree}
          />
        </div>
      )}

      <div className="flex justify-end">
        <button type="submit" className="bg-primaryPurple text-white px-4 py-2 rounded hover:bg-secondaryPurple">Submit</button>
      </div>
    </form>
  );
};

export default AddEventForm;
