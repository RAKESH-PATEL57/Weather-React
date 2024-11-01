import { useState, useRef, useEffect } from "react";
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";
import axios from "axios";
import GettingWeatherImage from "./GettingWeatherImage";
import Alert from "./Alert";

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({ loading: true });
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [geolocationDenied, setGeolocationDenied] = useState(false);
  const [defaultInputPlace, setDefaultInputPlace] = useState(true);
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
    setDefaultInputPlace(false);   ///input section
    const primaryName = suggestion.display_name.split(",")[0].trim();
    setSelectedLocation({
      displayName: primaryName,
      lat: suggestion.lat,
      lon: suggestion.lon,
    });
    setLatitude(suggestion.lat);
    setLongitude(suggestion.lon);
    setSearchQuery(primaryName); // Set only the primary name in the search box
    setSuggestions([]);
  };

  const fetchPlaceName = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`
      );
      const data = await response.json();
      const primaryName = data.display_name.split(",")[0].trim();
      setSelectedLocation({ displayName: primaryName });
    } catch (error) {
      console.error("Error fetching place name:", error);
    }
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
      setDefaultInputPlace(false);   ///input section
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lon);
      fetchPlaceName(lat, lon); // Fetch place name based on coordinates
    };

    const showError = (error) => {
      if (error.code === error.PERMISSION_DENIED) {
        setGeolocationDenied(true);
      }
      console.log("Error getting location:", error);
      // alert("Please enter the place name or allow the location to see the weather forecast");
    };

    getLocation();
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code&hourly=weather_code,temperature_120m&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code&timezone=auto`
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

  const currentTemperature = weatherData.current?.temperature_2m ?? "N/A";
  const currentHumidity = weatherData.current?.relative_humidity_2m ?? "N/A";
  const weatherImage = weatherData.current?.weather_code;

  return (
    <section className="home-section">
      <div className="bg">
        <img id="bg-image" loading="lazy" src="/src/assets/bg.jpg" alt="Background" />
      </div>
      <div className="home">
        <div className="weather-details">
          <div className="search-section" id={defaultInputPlace ? "defaultInputPlace" :""}>
            <input
              className="place"
              type="text"
              placeholder={geolocationDenied ? "Write place name" : "Enter City"}
              value={searchQuery}
              onChange={handleInputChange}
              required
            />
            {/* <button className="search-btn">
              <i className="bi bi-search"></i>
            </button> */}
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

          {(latitude && longitude) || selectedLocation ? (
            <div className="current-location">
              <div className="place-report">
                <div className="currentPlaceName">
                  {loading ? <div className="loading"></div> : null}
                  <h1 className="currentPlace">
                    At - <span id="currentPlaceName">{selectedLocation ? selectedLocation.displayName : ""}</span>
                  </h1>
                </div>
                <h3 className="dt">Date - {currentFullDate}</h3>
                <div className="humidity">
                  {loading ? <div className="loading"></div> : null}
                  <h3 className="humidity">Humidity: {currentHumidity}%</h3>
                </div>
              </div>
              <div className="current-img-temp">
                <div className="current-img-container">
                  {loading ? <div className="loading"></div> : null}
                  <img className="current-img" src={GettingWeatherImage(weatherImage)} alt="Weather" />
                </div>
                <div className="currentTemp">
                  {loading ? <div className="loading"></div> : null}
                  <h3 className="temp">{currentTemperature}°C</h3>
                </div>
              </div>
            </div>
          ) : (
            geolocationDenied ? <Alert /> : null
          )}

          {weatherData.hourly && (
            <HourlyForcast weatherData={weatherData.hourly} loading={loading} />
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
