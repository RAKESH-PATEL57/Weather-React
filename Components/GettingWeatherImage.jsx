function GettingWeatherImage(weatherCode) {
  
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
      default:
        // console.log("Default image used for weatherCode:", weatherCode); // Debugging line
        return "/src/assets/gifs/default.gif";
    }
  }
  
  export default GettingWeatherImage;
  