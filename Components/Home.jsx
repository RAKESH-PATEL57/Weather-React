import { useState, useRef, useEffect } from "react";
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";
import axios from "axios";

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({ loading: true });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const debounceTimeoutRef = useRef(null);

  const date = new Date();
  const currentFullDate = `${date.getDate()} ${date.toLocaleString("en-US", { month: "short" })} ${date.getFullYear()}`;

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

    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_120m,weather_code,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weathercode&timezone=auto`
          );
          setWeatherData(response.data);
        } catch (error) {
          console.log("Error fetching weather data:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [latitude, longitude]);

  const currentHour = new Date().getHours();
  const currentTemperature = weatherData.hourly?.temperature_120m?.[currentHour - 1] ?? 0;
  const currentHumidity = weatherData.hourly?.relative_humidity_2m?.[currentHour - 1] ?? 50;

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

          <div className="current-location">
            <div className="place-report">
              <h1 className="currentPlace">
                At - <span id="currentPlaceName">{selectedLocation ? selectedLocation.displayName.split(",")[0].trim() : "Sambalpuri"}</span>
              </h1>
              <h3 className="dt">Date - {currentFullDate}</h3>
              <div className="humidity">
              {loading ? <div className="loading"></div> : null}
              <h3 className="humidity">Humidity :- {currentHumidity}%</h3>
              </div>
            </div>
            <div className="current-img-temp">
              <img className="current-img" src="/src/assets/gifs/heavyrain.gif" alt="cloudy" />
              <div className="currentTemp">
                {loading ? <div className="loading"></div> : null}
                <h3 className="temp">{currentTemperature}°C</h3>
              </div>
            </div>
          </div>

          {weatherData.hourly ? (
            <HourlyForcast weatherData={weatherData.hourly} loading={loading} />
          ) : (
            <div>Loading forecast...</div>
          )}
        </div>

        {weatherData.daily && (
          <SevenDaysForecast weatherData={weatherData.daily} loading={loading} />
        )}
      </div>
    </section>
  );
}

export default Home;
