import CurrentWeather from "./CurrentWeather";
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";


function Home()
{
    return (
        <section className="home-section">
        <div className="bg">
         <img id="bg-image" src="/src/assets/bg.jpg" alt="" />
        </div>
        <div className="home">
          <div className="weather-details">
            <CurrentWeather />
            <HourlyForcast />
          </div>
          <SevenDaysForecast />
        </div>
       
      </section>
  
    );
}

export default Home;