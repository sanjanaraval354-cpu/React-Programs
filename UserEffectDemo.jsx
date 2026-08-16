import { useEffect, useState } from "react";

function UseEffectDemo(){
    const[count,setCount]=useState(0);
     useEffect(()=>{
        document.title = `Click :${count}`;
     },[count]);
    return(
        <div>
            Count:{count}
            <p><button onClick={()=>setCount(count+1)}>Increment</button></p>
        </div>
    );
}
export default UseEffectDemo;
