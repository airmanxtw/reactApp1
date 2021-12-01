import React, { useEffect, useState } from "react";

let TestTimer = React.memo(function () {
    let [time, setTime] = useState({counter:0});
    useEffect(() => {
        console.log("effect");
    }, [time]);

    return <div>
        {time.counter}
        <button onClick={()=>{setTime({...time,counter:time.counter+1})}}>按我</button>
    </div>
});

export default TestTimer;