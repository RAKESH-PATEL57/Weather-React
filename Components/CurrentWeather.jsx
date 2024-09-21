function CurrentWeather()
{
    return (
        <>
        <div className="search-section">
          <input className="place" type="text" placeholder="Enter City" required/>
          <button className="search-btn"><i className="bi bi-search"></i></button>
        </div>

        <div className="current-location">
          <div className="place-report">
            <h1 className="currentPlace">At -<span id="currentPlaceName"> Sambalpuri</span></h1>
            <h3 className="dt">Date - 1 Oct 2023</h3>
            <h3 className="humidity">Humidity :- 50%</h3>
          </div>
          <div className="current-img-temp">
            <img className="current-img" src="/src/assets/gifs/heavyrain.gif" alt="cloudy" />
            <h3 className="temp">37°C</h3>
          </div>
        </div>
        </>
    );
}

export default CurrentWeather;