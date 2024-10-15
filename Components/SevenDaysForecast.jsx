import SevenDaysNamesWeather from "./SevenDaysNamesWeather";
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

  function generatingDay(i)
  {
    
    daycount = date.getDay() + i;
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
        <h3>5 days forecast</h3>
        <div className="forecastcontainer">
          <SevenDaysNamesWeather 
            generateDay = {generatingDay(i++)} 
            imageLink = "/src/assets/gifs/thunder-storm.gif"
          />
          <SevenDaysNamesWeather 
            generateDay = {generatingDay(i++)} 
            imageLink = "/src/assets/gifs/heavyrain.gif"
          />
          <SevenDaysNamesWeather 
            generateDay = {generatingDay(i++)} 
            imageLink = "/src/assets/gifs/raininng.gif"
          />
          <SevenDaysNamesWeather 
            generateDay = {generatingDay(i++)} 
            imageLink = "/src/assets/gifs/sunandcloud2.gif"
          />
          <SevenDaysNamesWeather 
            generateDay = {generatingDay(i++)} 
            imageLink = "/src/assets/gifs/sunandcloud.gif"
          />
        
        </div>  
      </div>
    );
}

export default SevenDaysForecast;

