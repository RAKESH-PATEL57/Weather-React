function SevenDaysForecast()
{

  // let sevenDaysList = document.querySelectorAll(".seven-days-list");
  const date = new Date();
  const weekDaysNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday'];
  
  // console.log(currentWeekDayName);
  
  // let days = date.getDate();
  
  // day ra taa milu che i ra value setaa rakhmaa aau 7 din chalaama
  // console.log(currentWeekDayName);
  // sunday - 0
  // monday - 1
  // tuesday - 2
  // wednesday - 3
  // thursday - 4
  // friday - 5
  // saturday - 6
  var daycount = 0;
  var dayLoopStart = 0;

  function testing(i)
  {

    
    daycount = date.getDay() + i;

    // sevenDaysList[i].innerHTML = weekDaysNames[daycount];
    
    console.log(daycount);
    if(daycount > 6)
      {
        dayLoopStart++;
        return weekDaysNames[dayLoopStart-1];
      }
      return weekDaysNames[daycount];
    }
    
    let i=0;

    return (
        <div className="sevendays">
        <h3>7 days forecast</h3>
        <div className="forecastcontainer">
          <div className="days">
            <h3 id="day1" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img1" src="/src/assets/gifs/thunder-storm.gif" alt="thunder-storm" />
          </div>
          <div className="days">
            <h3 id="day2" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img2" src="/src/assets/gifs/sunnyrain.gif" alt="lightRain"/>
          </div>
          <div className="days">
            <h3 id="day3" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img3" src="/src/assets/gifs/sun and cloud.gif" alt="lightSky"/>
          </div>
          <div className="days">
            <h3 id="day4" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img4" src="/src/assets/gifs/sun and cloud 2.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day5" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img5" src="/src/assets/gifs/raininng.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day6" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img6" src="/src/assets/gifs/heavyrain.gif" alt="" />
          </div>
          <div className="days">
            <h3 id="day7" className="seven-days-list">{testing(i++)}</h3>
            <h4>37°C</h4>
            <img id="img7" src="/src/assets/gifs/giphy.gif" alt="" />
          </div>
        </div>
      </div>
    );
}

export default SevenDaysForecast;

