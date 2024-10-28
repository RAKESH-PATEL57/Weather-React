import GettingWeatherImage from "./GettingWeatherImage";
/* eslint-disable react/prop-types */
function HourContents({ fHr, sHr, weatherCode, loading, temp }) {
  const fTimeFormate = fHr >= 12 ? "PM" : "AM";
  const sTimeFormate = sHr > 12 ? "PM" : "AM";

  const upperTime = fHr % 12 || 12; // Ensures 12-hour format displays 12 instead of 0
  const lowerTime = sHr % 12 || 12;

  // Get the weather image URL based on the weather code
  const weatherImage = GettingWeatherImage(weatherCode);

  return (
    <div className="hour-content">
      <div className="imageContainer">
        {loading ? (
          <div className="loading"></div>
        ) : (
          <img src={weatherImage} alt="Weather condition" />
        )}
      </div>
      <div className="time">
        <div className="time-content">
          <h3 id="t11" className="fHour">
            {upperTime < 10 ? `0${upperTime}:00` : `${upperTime}:00`}
          </h3>
          <span className="time-format-up">{fTimeFormate}</span>
        </div>
        <span>to</span>
        <div className="time-content">
          <h3 id="t12" className="sHour">
            {lowerTime < 10 ? `0${lowerTime}:59` : `${lowerTime}:59`}
          </h3>
          <span className="time-format-down">{sTimeFormate}</span>
        </div>
        <div className="temp-container">
          {loading ? <div className="loading"></div> : null}
          <span className="hour-temperatures">{temp}°C</span>
        </div>
      </div>
    </div>
  );
}

export default HourContents;
