/* eslint-disable react/prop-types */
function HourContents(props)
{
    
   return (
    <div className="hour-content">
        <img src="/src/assets/gifs/heavyrain.gif" alt="Raining" />
        <div className="time">
            <div className="time-content">
                <h3 id="t11" className="fHour">
                {props.fHr < 10 ? `0${props.fHr} : 59` : `${props.fHr} : 59`}
                </h3>
                <span className="time-format-up">{props.fTimeFrmt}</span>
            </div>
            <span>to</span>
            <div className="time-content">
                <h3 id="t12" className="sHour">
                {props.sHr < 10 ? `0${props.sHr} : 59` : `${props.sHr} : 59`}
                </h3>
                <span className="time-format-down">{props.sTimeFrmt}</span>
            </div>
            <span className="hour-temperatures">34°C</span>
        </div>
    </div>
   );
}

export default HourContents;