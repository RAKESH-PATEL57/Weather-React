function SevenDaysForecast()
{
    return (
        <div className="sevendays">
        <h3>7 days forecast</h3>
        <div className="forecastcontainer">
          <div className="days">
            <h3 id="day1" className="seven-days-list"></h3>
            <h4>37°C</h4>

            <img id="img1" src="/src/assets/gifs/thunder-storm.gif" alt="thunder-storm" />
          </div>
          <div className="days">
            <h3 id="day2" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img2" src="/src/assets/gifs/sunnyrain.gif" alt="lightRain"/>
          </div>
          <div className="days">
            <h3 id="day3" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img3" src="/src/assets/gifs/sun and cloud.gif" alt="lightSky"/>
          </div>
          <div className="days">
            <h3 id="day4" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img4" src="/src/assets/gifs/sun and cloud 2.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day5" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img5" src="/src/assets/gifs/raininng.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day6" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img6" src="/src/assets/gifs/heavyrain.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day7" className="seven-days-list"></h3>
            <h4>37°C</h4>
            <img id="img7" src="/src/assets/gifs/giphy.gif" alt="" />
          </div>
        </div>
      </div>
    );
}

export default SevenDaysForecast;

