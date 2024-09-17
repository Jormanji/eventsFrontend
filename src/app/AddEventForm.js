import { useState } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 37.7749, // Default to San Francisco (or any default center you prefer)
  lng: -122.4194
};

const libraries = ['places'];

const AddEventForm = () => {
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [location, setLocation] = useState({ lat: center.lat, lng: center.lng });
  const [address, setAddress] = useState("");
  const [language, setLanguage] = useState("English"); // New language state
  const [errorMessage, setErrorMessage] = useState("");

  // Load Google Maps API
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Use environment variable
    libraries,
  });

  const handleCheckboxChange = (e) => {
    setIsFree(e.target.checked);
    if (e.target.checked) {
      setPrice(""); // Clear price if the event is free
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    setPrice(value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleLocationChange = (e) => {
    setAddress(e.target.value);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Update the language selection state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", {
      eventName: e.target.eventName.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      isFree,
      price,
      currency,
      address,
      location,
      language, // Include language in the submitted data
    });
  };

  const handleMapClick = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    setLocation({ lat, lng });
  };

  const geocodeAddress = () => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;
        setLocation({ lat: lat(), lng: lng() });
      } else {
        setErrorMessage("Geocode was not successful for the following reason: " + status);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Host an Event</h2>

      {/* Error Message */}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}

      {/* Event Name */}
      <div className="mb-4">
        <label htmlFor="eventName" className="block text-sm font-bold mb-2">Event Name</label>
        <input type="text" id="eventName" name="eventName" className="w-full p-2 border border-gray-300 rounded" required />
      </div>

      {/* Start Date and Time */}
      <div className="mb-4">
        <label htmlFor="startDate" className="block text-sm font-bold mb-2">Start Date and Time</label>
        <input type="datetime-local" id="startDate" name="startDate" className="w-full p-2 border border-gray-300 rounded" required />
      </div>

      {/* End Date and Time */}
      <div className="mb-4">
        <label htmlFor="endDate" className="block text-sm font-bold mb-2">End Date and Time</label>
        <input type="datetime-local" id="endDate" name="endDate" className="w-full p-2 border border-gray-300 rounded" required />
      </div>

      {/* Location */}
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-bold mb-2">Event Location</label>
        <input 
          type="text" 
          id="address" 
          name="address" 
          value={address} 
          onChange={handleLocationChange} 
          className="w-full p-2 border border-gray-300 rounded" 
          placeholder="Enter address" 
          required 
        />
        <button type="button" onClick={geocodeAddress} className="mt-2 p-2 bg-primaryPurple text-white rounded">Find on Map</button>
      </div>

      {/* Google Map */}
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

      {/* Language Selection */}
      <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-bold mb-2">Event Language</label>
        <select 
          id="language" 
          name="language" 
          value={language} 
          onChange={handleLanguageChange} 
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

      {/* Is the event free? */}
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">
          <input type="checkbox" checked={isFree} onChange={handleCheckboxChange} className="mr-2" />
          Is the event free?
        </label>
      </div>

      {/* Price and Currency (hidden if free) */}
      {!isFree && (
        <div className="mb-4 flex gap-4">
          <div className="w-1/2">
            <label htmlFor="price" className="block text-sm font-bold mb-2">Price</label>
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
          
          <div className="w-1/2">
            <label htmlFor="currency" className="block text-sm font-bold mb-2">Currency</label>
            <select 
              id="currency" 
              name="currency" 
              value={currency} 
              onChange={handleCurrencyChange} 
              className="w-full p-2 border border-gray-300 rounded"
              required={!isFree}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="AUD">AUD</option>
              <option value="CAD">CAD</option>
              <option value="JPY">JPY</option>
            </select>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <div className="flex justify-end">
        <button type="submit" className="bg-primaryPurple text-white px-4 py-2 rounded hover:bg-secondaryPurple">Submit</button>
      </div>
    </form>
  );
};

export default AddEventForm;
