function GettingWeatherImage(weatherCode) {
  
    switch (weatherCode) {
      case 0: // Clear sky
        return "/public/assets/clearSky.gif";
      case 1: // Mainly clear
      case 2: // Partly cloudy
      case 3: // Overcast
        return "/public/assets/partlyCloudy.gif";
      case 45: // Fog
      case 48: // Depositing rime fog
        return "/public/assets/overCast.gif";
      case 51: // Drizzle: Light intensity
      case 53: // Drizzle: Moderate intensity
      case 55: // Drizzle: Dense intensity
        return "/public/assets/lighting.gif";
      case 56: // Freezing Drizzle: Light intensity
      case 57: // Freezing Drizzle: Dense intensity
        return "/public/assets/snowFall.gif";
      case 61: // Rain: Slight intensity
      case 63: // Rain: Moderate intensity
      case 65: // Rain: Heavy intensity
        return "/public/assets/slightModerate.gif";
      case 66: // Freezing Rain: Light intensity
      case 67: // Freezing Rain: Heavy intensity
      case 71: // Snow fall: Slight intensity
      case 73: // Snow fall: Moderate intensity
      case 75: // Snow fall: Heavy intensity
      case 77: // Snow grains
        return "/public/assets/snowFall.gif";
      case 80: // Rain showers: Slight intensity
      case 81: // Rain showers: Moderate intensity
      case 82: // Rain showers: Violent intensity
        return "/public/assets/heavyRain.gif";
      case 85: // Snow showers: Slight intensity
      case 86: // Snow showers: Heavy intensity
        return "/public/assets/snowFall.gif";
      case 95: // Thunderstorm: Slight or moderate intensity
        return "/public/assets/thunderstorm.gif";
      case 96: // Thunderstorm with slight hail
      case 99: // Thunderstorm with heavy hail
        return "/public/assets/thunderStorm.gif";
      default:
        // console.log("Default image used for weatherCode:", weatherCode); // Debugging line
        return "/public/assets/default.gif";
    }
  }
  
  export default GettingWeatherImage;
  