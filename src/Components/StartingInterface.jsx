import { useRef, useState } from "react";

function StartingInterface()
{

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const debounceTimeoutRef = useRef(null);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const fetchSuggestions = async (query) => {
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`
          );
          const data = await response.json();
          setSuggestions(data);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
    
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
    
        debounceTimeoutRef.current = setTimeout(() => {
          if (query.length >= 3) {
            fetchSuggestions(query);
          } else {
            setSuggestions([]);
          }
        }, 300);
      };

      const handleSuggestionClick = (suggestion) => {
        const placeName = suggestion.display_name.split(",")[0].trim();
        setSelectedLocation({
          displayName: suggestion.display_name,
          lat: suggestion.lat,
          lon: suggestion.lon,
        });
        setLatitude(suggestion.lat);
        setLongitude(suggestion.lon);
        setSearchQuery(placeName);
        setSuggestions([]);
      };
    
    

    return(
        <div className="search-section">
            <input
              className="place"
              type="text"
              placeholder="Enter City"
              value={searchQuery}
              onChange={handleInputChange}
              required
            />
            <button className="search-btn">
              <i className="bi bi-search"></i>
            </button>
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.display_name}
                  </li>
                ))}
              </ul>
            )}
          </div>
    )
}

export default StartingInterface;