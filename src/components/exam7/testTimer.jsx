import React, { useEffect, useState } from "react";
import useTimers from "../exam3/timer.js";
let TestTimer = React.memo(function () {
    let [time, setTime] = useState(0);
   
    let timer=useTimers();


    return <div>
        {timer}
    </div>
});

export default TestTimer;