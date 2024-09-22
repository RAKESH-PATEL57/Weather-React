// import { useState } from "react";
import HourContents from "./HourContents";

function HourlyForcast()
{   

    let currentHour = new Date().getHours();

    let fHour = currentHour;
    let sHour = currentHour + 1;

    let fTimeFormate = fHour > 12 ? "PM" :"AM";
    let sTimeFormate = sHour > 12 ? "PM" :"AM";

    fHour = fHour % 12;
    sHour = sHour % 12;

    // const [fHour,nextFHour] = useState(currentHour);
    // const [sHour,nextSHour] = useState(currentHour+1);

    return (
        <>
        <div className="hour-forecast">
          <div className="hour-forecast-container">
            {/* {generatingHourContents()} */}
            <HourContents 
            fHr = {fHour} 
            sHr = {sHour}
            fTimeFrmt = {fTimeFormate}    
            sTimeFrmt = {sTimeFormate}    
            />
          </div>
        </div>
      </>
    );
}

export default HourlyForcast;