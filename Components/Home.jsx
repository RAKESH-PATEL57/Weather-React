import { useState, useRef, useEffect } from "react";
// Importing the components for hourly and weekly forecasts
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";
import axios from "axios";

function Home() {
  // State variables
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({ loading: true });
  const [loading, setLoading] = useState(false);

  // State for address search
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const debounceTimeoutRef = useRef(null);

  // Getting the current date
  const date = new Date();
  const currentFullDate = `${date.getDate()} ${date.toLocaleString('en-US', { month: 'short' })} ${date.getFullYear()}`;

  // Function to fetch location suggestions from OpenStreetMap API
  const fetchSuggestions = async (query) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`
      );
      const data = await response.json();
      setSuggestions(data); // Update suggestions based on response
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  // Handle input change for search with debouncing
  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Clear previous timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to fetch suggestions
    debounceTimeoutRef.current = setTimeout(() => {
      if (query.length >= 3) {
        fetchSuggestions(query); // Fetch suggestions if query is long enough
      } else {
        setSuggestions([]); // Clear suggestions if query is too short
      }
    }, 300); // 300ms debounce time
  };

  // Handle click on a suggestion
  const handleSuggestionClick = (suggestion) => {
    // Extract only the main place name before the first comma
    const placeName = suggestion.display_name.split(",")[0].trim(); 

    setSelectedLocation({
      displayName: suggestion.display_name,
      lat: suggestion.lat,
      lon: suggestion.lon,
    });
    setLatitude(suggestion.lat);
    setLongitude(suggestion.lon);
    setSearchQuery(placeName); // Set search query to only the place name
    setSuggestions([]); // Clear suggestions after selection
  };

  // Get user's current location when the component mounts
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    const showPosition = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const showError = (error) => {
      console.log("Error getting location:", error);
    };

    getLocation(); // Call function to get location
  }, []); // Runs only once on component mount

  // Fetch weather data based on latitude and longitude
  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_120m&timezone=auto`
          );
          setWeatherData(response.data); // Update weather data
        } catch (error) {
          console.log("Error fetching weather data:", error);
        } finally {
          setLoading(false); // Stop loading
        }
      };

      fetchWeatherData(); // Fetch weather data
    }
  }, [latitude, longitude]); // Fetch data when coordinates change

  // Get the current temperature or default to 0
  const currentHour = new Date().getHours();
  const currentTemperature = Math.round(weatherData.hourly?.temperature_120m?.[currentHour - 1] ?? 0);

  return (
    <section className="home-section">
      <div className="bg">
        <img id="bg-image" src="/src/assets/bg.jpg" alt="Background" />
      </div>
      <div className="home">
        <div className="weather-details">
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

            {/* Suggestions dropdown */}
            {suggestions.length > 0 && (
              <ul className="suggestions-list">
                {suggestions.map((suggestion) => (
                  <li
                    key={suggestion.place_id}
                    onClick={() => handleSuggestionClick(suggestion)}
                  >
                    {suggestion.display_name} {/* Display full name in suggestions */}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="current-location">
            <div className="place-report">
              <h1 className="currentPlace">
                At - <span id="currentPlaceName"> {selectedLocation ? selectedLocation.displayName.split(",")[0].trim() : "Sambalpuri"}</span>
              </h1>
              <h3 className="dt">Date - {currentFullDate}</h3>
              <h3 className="humidity">Humidity :- 50%</h3>
            </div>
            <div className="current-img-temp">
              <img className="current-img" src="/src/assets/gifs/heavyrain.gif" alt="cloudy" />
              <div className="currentTemp">
                {loading ? <div className="loading"></div> : null}
                <h3 className="temp">{currentTemperature}°C</h3>
              </div>
            </div>
          </div>

          {/* Hourly forecast */}
          {weatherData.hourly ? (
            <HourlyForcast tempInEachHour={weatherData.hourly} loading={loading} />
          ) : (
            <div>Loading forecast...</div>
          )}
        </div>
        <SevenDaysForecast />
      </div>
    </section>
  );
}

export default Home;
