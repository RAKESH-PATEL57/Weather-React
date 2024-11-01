import clearSky from "/public/assets/clearSky.gif";
import partlyCloudy from "/public/assets/partlyCloudy.gif";
import overCast from "/public/assets/overCast.gif";
import lighting from "/public/assets/lighting.gif";
import snowFall from "/public/assets/snowFall.gif";
import slightModerate from "/public/assets/slightModerate.gif";
import heavyRain from "/public/assets/heavyRain.gif";
import thunderStorm from "/public/assets/thunderStorm.gif";
import defaultImage from "/public/assets/default.gif";

function GettingWeatherImage(weatherCode) {
  
    switch (weatherCode) {
      case 0: // Clear sky
        return clearSky;
      case 1: // Mainly clear
      case 2: // Partly cloudy
      case 3: // Overcast
        return partlyCloudy;
      case 45: // Fog
      case 48: // Depositing rime fog
        return overCast;
      case 51: // Drizzle: Light intensity
      case 53: // Drizzle: Moderate intensity
      case 55: // Drizzle: Dense intensity
        return lighting;
      case 56: // Freezing Drizzle: Light intensity
      case 57: // Freezing Drizzle: Dense intensity
        return snowFall;
      case 61: // Rain: Slight intensity
      case 63: // Rain: Moderate intensity
      case 65: // Rain: Heavy intensity
        return slightModerate;
      case 66: // Freezing Rain: Light intensity
      case 67: // Freezing Rain: Heavy intensity
      case 71: // Snow fall: Slight intensity
      case 73: // Snow fall: Moderate intensity
      case 75: // Snow fall: Heavy intensity
      case 77: // Snow grains
        return snowFall;
      case 80: // Rain showers: Slight intensity
      case 81: // Rain showers: Moderate intensity
      case 82: // Rain showers: Violent intensity
        return heavyRain;
      case 85: // Snow showers: Slight intensity
      case 86: // Snow showers: Heavy intensity
        return snowFall;
      case 95: // Thunderstorm: Slight or moderate intensity
        return thunderStorm;
      case 96: // Thunderstorm with slight hail
      case 99: // Thunderstorm with heavy hail
        return thunderStorm;
      default:
        // console.log("Default image used for weatherCode:", weatherCode); // Debugging line
        return defaultImage;
    }
  }
  
  export default GettingWeatherImage;
  