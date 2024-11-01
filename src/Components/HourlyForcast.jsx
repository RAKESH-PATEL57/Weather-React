/* eslint-disable react/prop-types */
import HourContents from "./HourContents";

function HourlyForcast({ weatherData, loading }) {
  let currentHour = new Date().getHours();

  const time = [
    { id: 1, fHour: currentHour, sHour: currentHour + 1 },
    { id: 2, fHour: currentHour + 2, sHour: currentHour + 3 },
    { id: 3, fHour: currentHour + 4, sHour: currentHour + 5 },
    { id: 4, fHour: currentHour + 6, sHour: currentHour + 7 },
    { id: 5, fHour: currentHour + 8, sHour: currentHour + 9 },
    { id: 6, fHour: currentHour + 10, sHour: currentHour + 11 },
    { id: 7, fHour: currentHour + 12, sHour: currentHour + 13 },
    { id: 8, fHour: currentHour + 14, sHour: currentHour + 15 },
    { id: 9, fHour: currentHour + 16, sHour: currentHour + 17 },
    { id: 10, fHour: currentHour + 18, sHour: currentHour + 19 },
    { id: 11, fHour: currentHour + 20, sHour: currentHour + 21 },
    { id: 12, fHour: currentHour + 22, sHour: currentHour + 23 },
  ];

  
  console.log(weatherData);
  return (
      <div className="hour-forecast">
      <div className="hour-forecast-container">
        {time.map((elem, index) => {
          const temp = weatherData?.temperature_120m?.[elem.fHour - 1] ?? "N/A";
          const weatherCode = weatherData?.weather_code?.[index] ?? null;
          
          return (
            <HourContents
              key={elem.id}
              fHr={elem.fHour % 24}
              sHr={elem.sHour % 24}
              loading={loading}
              temp={temp}
              weatherCode={weatherCode}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HourlyForcast;
