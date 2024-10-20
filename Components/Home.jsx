import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";
import axios from "axios";

function Home() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weatherData, setWeatherData] = useState({ loading: true });
  const [loading, setLoading] = useState(false);

  // Get user's location when the component mounts
  useEffect(() => {
    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    }

    function showError(error) {
      console.log("Error getting location:", error);
    }

    getLocation();
  }, []); // Runs only once on component mount

  // Fetch weather data once latitude and longitude are available
  useEffect(() => {
    if (latitude && longitude) {
      const fetchWeatherData = async () => {
        setLoading(true);

        try {
          // const link = `https://api.open-meteo.com/v1/forecast?latitude=21.3470&longitude=83.6320&hourly=temperature_120m&timezone=auto`;
          const link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_120m&timezone=auto`;
          const response = await axios.get(link);
          setWeatherData(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

      fetchWeatherData();
    }
  }, [latitude, longitude]); // Fetch weather data when latitude and longitude change

  let currentHour = new Date().getHours();

  // Handle undefined temperature_120m data with fallback to 0
  let currentTemperature = Math.round(
    weatherData.hourly?.temperature_120m?.[currentHour - 1] ?? 0
  ); // Default to 0 if undefined

  return (
    <section className="home-section">
      <div className="bg">
        <img id="bg-image" src="/src/assets/bg.jpg" alt="Background" />
      </div>
      <div className="home">
        <div className="weather-details">
          <CurrentWeather currentTemperature={currentTemperature} loading={loading} />
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
