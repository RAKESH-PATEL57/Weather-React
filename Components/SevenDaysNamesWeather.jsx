/* eslint-disable react/prop-types */
function SevenDaysNamesWeather(props)
{
    return(
        <div className="days">
            <h3 id="day1" className="seven-days-list">{props.generateDay}</h3>
            <h4>37°C</h4>
            <img id="img1" src={props.imageLink} alt="thunder-storm" />
          </div>
    );
}

export default SevenDaysNamesWeather;