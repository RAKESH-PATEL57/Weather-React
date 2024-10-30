import GettingWeatherImage from "./GettingWeatherImage";

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
               <img src={GettingWeatherImage(weatherData.weathercode[index])} alt="weather-icon" />          {/* Displaying the image */}
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
          <img src={GettingWeatherImage(weatherData.weathercode[index])} alt="weather-icon" />          {/* Displaying the image */}
      </div>
      ))}
    </div>
  </div>
  );
}

export default SevenDaysForecast;
