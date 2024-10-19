import { useState } from "react";
import { useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import HourlyForcast from "./HourlyForcast";
import SevenDaysForecast from "./SevenDaysForecast";
import axios from 'axios';

function Home()
{
  

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  getLocation();

  let latitude = null;
  let longitude = null;
  
  function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
   
  }

  let link = null;
  // console.log(latitude, longitude);
  



 
  const [weatherData, setweatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
  
      const fetchWeatherData = async () => {
        setLoading(true);
      
          try{
            const response = await axios.get(link);
            setweatherData(response.data);
            console.log(latitude);
          }
          catch(error) {
            console.log(error);
          }
          finally{
            setLoading(false);
          }
   
      }
      setTimeout(() => {
        
        console.log(latitude);
        console.log(longitude);
        link = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_120m&timezone=auto`;
        fetchWeatherData();
    
      }, 1000);
  }, [latitude, link]);


  let currentTemperature = Math.round(weatherData.hourly.temperature_120m[0]);



    console.log(weatherData);

 


  


    return (
        <section className="home-section">
        <div className="bg">
         <img id="bg-image" src="/src/assets/bg.jpg" alt="" />
        </div>
        <div className="home">
          <div className="weather-details">
            <CurrentWeather currentTemperature = {currentTemperature} loading={loading}/>
            <HourlyForcast loading={loading}/>
          </div>
          <SevenDaysForecast />
        </div>
       
      </section>
  
    );
}

export default Home;