/* eslint-disable react/prop-types */
import GettingWeatherImage from "./GettingWeatherImage";

function SevenDaysForecast({ weatherData, loading }) {
  const date = new Date();
  const weekDaysNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const weatherImage = weatherData.weather_code;

  function generatingDay(i) {
    return weekDaysNames[(date.getDay() + i) % 7];
  }

  if (loading) {
    return (
      <div className="sevendaysContainer">
        <h3>7 Days Forecast</h3>
        <div className="forecastcontainer">
          {Array.from({ length: 7 }).map((_, index) => (
            <div className="days" key={index}>
              <h3 className="seven-days-list">{generatingDay(index)}</h3>
              <div className="sevenDaysTempContainer">
                <div className="loading"></div>
                <h4>N/A</h4>
              </div>
              <div className="sevenDaysWeatherImageContainer">
                <div className="loading"></div>
                <img src="" alt="weather-icon" />
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
          <div className="days" key={index}>
            <h4 className="seven-days-list">{generatingDay(index)}</h4>
            <h4>{temp ?? "N/A"}°C</h4>
            <img
              src={GettingWeatherImage(weatherImage?.[index])}
              alt="weather-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SevenDaysForecast;
