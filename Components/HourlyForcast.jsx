// import { useState } from "react";
import HourContents from "./HourContents";

function HourlyForcast()
{   

    let currentHour = new Date().getHours();

    const time = [
        {
            id:1,
            fHour : currentHour,
            sHour : currentHour,
        },
        {
            id:2,
            fHour : currentHour + 1,
            sHour : currentHour + 1,
        },
        {
            id:3,
            fHour : currentHour + 2,
            sHour : currentHour + 2,
        },
        {
            id:4,
            fHour : currentHour + 3,
            sHour : currentHour + 3,
        },
        {
            id:5,
            fHour : currentHour + 4,
            sHour : currentHour + 4,
        },
        {
            id:6,
            fHour : currentHour + 5,
            sHour : currentHour + 5,
        },
        {
            id:7,
            fHour : currentHour + 6,
            sHour : currentHour + 6,
        },
        {
            id:8,
            fHour : currentHour + 7,
            sHour : currentHour + 7,
        },
        {
            id:9,
            fHour : currentHour + 8,
            sHour : currentHour + 8,
        },
        {
            id:10,
            fHour : currentHour + 9,
            sHour : currentHour + 9,
        },
        {
            id:11,
            fHour : currentHour + 10,
            sHour : currentHour + 10,
        },
        {
            id:12,
            fHour : currentHour + 11,
            sHour : currentHour + 11,
        },
        {
            id:13,
            fHour : currentHour + 12,
            sHour : currentHour + 12,
        },
        {
            id:14,
            fHour : currentHour + 13,
            sHour : currentHour + 13,
        },
        {
            id:15,
            fHour : currentHour + 14,
            sHour : currentHour + 14,
        },
        {
            id:16,
            fHour : currentHour + 15,
            sHour : currentHour + 15,
        },
        {
            id:17,
            fHour : currentHour + 16,
            sHour : currentHour + 16,
        },
        {
            id:18,
            fHour : currentHour + 17,
            sHour : currentHour + 17,
        },
        {
            id:19,
            fHour : currentHour + 18,
            sHour : currentHour + 18,
        },
        {
            id:20,
            fHour : currentHour + 19,
            sHour : currentHour + 19,
        },
        {
            id:21,
            fHour : currentHour + 20,
            sHour : currentHour + 20,
        },
        {
            id:22,
            fHour : currentHour + 21,
            sHour : currentHour + 21,
        },
        {
            id:23,
            fHour : currentHour + 22,
            sHour : currentHour + 22,
        },
        {
            id:24,
            fHour : currentHour + 23,
            sHour : currentHour + 23,
        },
      
    ]





    // const [fHour,nextFHour] = useState(currentHour);
    // const [sHour,nextSHour] = useState(currentHour+1);

    return (
        <>
        <div className="hour-forecast">
          <div className="hour-forecast-container">
            {/* {generatingHourContents()} */}
            {time.map((elem) => {
                return (
                
                <HourContents 
                key = {elem.id}
                fHr = {elem.fHour} 
                sHr = {elem.sHour} 
                />
                );
            })}
           
         
          </div>
        </div>
      </>
    );
}

export default HourlyForcast;