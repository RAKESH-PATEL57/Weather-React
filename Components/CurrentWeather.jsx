/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

function CurrentWeather(props)
{

  
  let date= new Date();

  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear();

  const currentFullDate = `${day} ${month} ${year}`;


    return (
        <>
        <div className="search-section">
          <input className="place" type="text" placeholder="Enter City" required/>
          <button className="search-btn"><i className="bi bi-search"></i></button>
        </div>

        <div className="current-location">
          <div className="place-report">
            <h1 className="currentPlace">At -<span id="currentPlaceName"> Sambalpuri</span></h1>
            <h3 className="dt">Date - {currentFullDate}</h3>
            <h3 className="humidity">Humidity :- 50%</h3>
          </div>
          <div className="current-img-temp">
            <img className="current-img" src="/src/assets/gifs/heavyrain.gif" alt="cloudy" />
            <div className="currentTemp">
             {props.loading === true ? <div className="loading"></div>:null}
             
             <h3 className="temp">{props.currentTemperature}°C</h3>
              {/* <h3 className="temp">20°C</h3> */}
            </div>
          </div>
        </div>
        </>
    );
}

export default CurrentWeather;