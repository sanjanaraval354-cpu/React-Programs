
// 9: Show / Hide Text using useState

import { useState } from "react";
function Program9(props){
    const [showText, setShowText] = useState(true);
    const handleClick = () => {
        if(showText?setShowText(false):setShowText(true));
    }
    return(
        <>
        <div>
        {showText? `Hello,  ${props.name}`: `Bye, ${props.name}`}
        <br/>
        <button onClick={handleClick}>Click Me</button>
        </div>
        </>
    );
}
export default Program9;
