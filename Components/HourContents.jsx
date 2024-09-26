/* eslint-disable react/prop-types */
function HourContents(props)
{
    
    let fTimeFormate = props.fHr < 24 ? "PM" :"AM";
    let sTimeFormate = props.sHr <= 24 ? "PM" :"AM";

    let upperTime = props.fHr % 12;
    let lowerTime = props.sHr % 12;
    
   return (
    <div className="hour-content">
        <img src="/src/assets/gifs/heavyrain.gif" alt="Raining" />
        <div className="time">
            <div className="time-content">
                <h3 id="t11" className="fHour">
                {upperTime < 10 ? `0${upperTime}:00` : `${upperTime}:00`}
                </h3>
                <span className="time-format-up">{fTimeFormate}</span>
            </div>
            <span>to</span>
            <div className="time-content">
                <h3 id="t12" className="sHour">
                {lowerTime < 10 ? `0${lowerTime}:59` : `${lowerTime}:59`}
                </h3>
                <span className="time-format-down">{sTimeFormate}</span>
            </div>
            <span className="hour-temperatures">34°C</span>
        </div>
    </div>
    // {/* <div className="hour-content">
    //             <img src="./src/assets/gifs/heavyrain.gif" alt="Raining" />
    //             <div className="time">
    //               <div className="time-content">
    //                 <h3 id="t11" className="up-time">11:59</h3>
    //                 <span className="time-format-up">AM</span>
    //               </div>
    //               <span>to</span>
    //               <div className="time-content">
    //                 <h3 id="t12" className="down-time">12:59</h3>
    //                 <span className="time-format-down">AM</span>
    //               </div>
    //               <span className="hour-temperatures">34°C</span>
    //              </div>
    //         </div> */}
   );
}

export default HourContents;