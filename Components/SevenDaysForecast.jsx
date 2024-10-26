/* eslint-disable react/prop-types */
function SevenDaysForecast({ weatherData, loading }) {
  const date = new Date();
  const weekDaysNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ];

  // Generate day names for each day in the forecast
  function generatingDay(i) {
    return weekDaysNames[(date.getDay() + i) % 7];
  }

  // Show loading animation if data is still loading
  if (loading) {
    return (
    <div className="sevendaysContainer">
      <h3>7 Days Forecast</h3>
      <div className="forecastcontainer">
        {weatherData.temperature_2m_max.map((temp, index) => (
          <div className="days"  key={index}>
            <h3 className="seven-days-list">{generatingDay(index)}</h3>  {/* Displaying the day */}
            <div className="sevenDaysTempContainer">
               <div className="loading"></div>
               <h4>{temp}°C</h4>                            {/* Displaying the temperature */}
            </div>
            <div className="sevenDaysWeatherImageContainer">
               <div className="loading"></div>
               <img src={getWeatherImage(weatherData.weathercode[index])} alt="weather-icon" />          {/* Displaying the image */}
            </div>
          </div>
        ))}
      </div>
    </div>
    );
  }

  return (
    <div className="sevendaysContainer">
    <h3>7 Days Forecast</h3>
    <div className="forecastcontainer">
      {weatherData.temperature_2m_max.map((temp, index) => (
         <div className="days"  key={index}>
          <h3 className="seven-days-list">{generatingDay(index)}</h3>                               {/* Displaying the day */}
          <h4>{temp}°C</h4>                                                                         {/* Displaying the temperature */}
          <img src={getWeatherImage(weatherData.weathercode[index])} alt="weather-icon" />          {/* Displaying the image */}
      </div>
      ))}
    </div>
  </div>
  );
}

// Function to return an appropriate image based on the weather code
function getWeatherImage(weatherCode) {
  console.log(weatherCode);
  switch (weatherCode) {
    case 0: // Clear sky
      return "/src/assets/gifs/clearSky.gif";

    case 1: // Mainly clear
    case 2: // Partly cloudy
    case 3: // Overcast
      return "/src/assets/gifs/partlyCloudy.gif";

    case 45: // Fog
    case 48: // Depositing rime fog
      return "/src/assets/gifs/overCast.gif";

    case 51: // Drizzle: Light intensity
    case 53: // Drizzle: Moderate intensity
    case 55: // Drizzle: Dense intensity
      return "/src/assets/gifs/lighting.gif";

    case 56: // Freezing Drizzle: Light intensity
    case 57: // Freezing Drizzle: Dense intensity
      return "/src/assets/gifs/snowFall.gif";

    case 61: // Rain: Slight intensity
    case 63: // Rain: Moderate intensity
    case 65: // Rain: Heavy intensity
      return "/src/assets/gifs/slightModerate.gif";

    case 66: // Freezing Rain: Light intensity
    case 67: // Freezing Rain: Heavy intensity
    case 71: // Snow fall: Slight intensity
    case 73: // Snow fall: Moderate intensity
    case 75: // Snow fall: Heavy intensity
    case 77: // Snow grains
     return "/src/assets/gifs/snowFall.gif";

    case 80: // Rain showers: Slight intensity
    case 81: // Rain showers: Moderate intensity
    case 82: // Rain showers: Violent intensity
    return "/src/assets/gifs/heavyRain.gif";
    
    case 85: // Snow showers: Slight intensity
    case 86: // Snow showers: Heavy intensity
      return "/src/assets/gifs/snowFall.gif";

    case 95: // Thunderstorm: Slight or moderate intensity
      return "/src/assets/gifs/thunderstorm.gif";

    case 96: // Thunderstorm with slight hail
    case 99: // Thunderstorm with heavy hail
      return "/src/assets/gifs/thunderStorm.gif";

    default: // Default image for unknown or unspecified weather codes
      return "/src/assets/gifs/default.gif";
  }
}

export default SevenDaysForecast;
