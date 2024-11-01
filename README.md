# Weather Forecast Website

A responsive weather forecast website that provides real-time weather information based on the user's location or a selected city. This application displays the current temperature, humidity, and a weather icon corresponding to the weather conditions. Users can also view hourly and seven-day forecasts for more in-depth weather insights.

## Features

- **Geolocation-Based Weather Data**: Automatically fetches weather details based on the user's current location.
- **Search Functionality**: Users can search for a city by typing its name, with suggestion options.
- **Current Weather Details**: Displays temperature, humidity, and a weather icon.
- **Hourly Forecast**: Provides hourly weather data for the selected location.
- **Seven-Day Forecast**: Shows weather information for the upcoming week.
- **Location Suggestions**: Suggests city names as the user types, using Nominatim's geocoding service.
- **Debounced Search**: Reduces the number of requests by waiting for a short period after the user stops typing.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces and handling the component structure.
- **HTML5**: Used for structuring the content on the website.
- **CSS3 / SCSS**: For styling the website and ensuring a responsive, user-friendly interface.
- **JavaScript (ES6)**: For implementing core functionality, search, and API calls.

### APIs and Libraries

- **Open-Meteo API**: Provides weather data including current weather, hourly, and seven-day forecasts.
- **Nominatim API (OpenStreetMap)**: Used for location-based search suggestions and reverse geocoding to fetch location names based on coordinates.
- **Axios**: Promise-based HTTP client for making API requests.
- **GettingWeatherImage Utility**: Custom function to fetch appropriate weather icons based on the weather code.

### Development Tools

- **Vite**: Fast development build tool and local server for serving the app.
- **Debounce Functionality**: Used to optimize the search feature and prevent unnecessary API calls.

## Folder Structure

