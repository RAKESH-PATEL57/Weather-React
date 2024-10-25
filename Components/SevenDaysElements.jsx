/* eslint-disable react/prop-types */
function SevenDaysElements({ generateDay, imageLink, temperature }) {
    return (
        <div className="days">
            <h3 className="seven-days-list">{generateDay}</h3>  {/* Displaying the day */}
            <h4>{temperature}°C</h4>                            {/* Displaying the temperature */}
            <img src={imageLink} alt="weather-icon" />          {/* Displaying the image */}
        </div>
    );
}

export default SevenDaysElements;
