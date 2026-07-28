import { useEffect, useState } from "react";

function DigitalClock(){
    const[time,setTime]=useState(new Date);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date)
        });
        return()=>clearInterval(interval);
    },1000);
   return(
    <div>
        <h2>Digital Clock</h2>
        Current Time: {time.toLocaleTimeString()}
    </div>
   );
}
export default DigitalClock;
