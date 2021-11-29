import { useState, useEffect } from "react";
function useTimers() {
    const [time, setTime] = useState((new Date()).toTimeString());

    setInterval(() => {
        setTime((new Date()).toTimeString());
    }, 2000);
    console.log('timer writeer');
    return time;
}

export default useTimers;