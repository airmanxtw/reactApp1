import { useState, useEffect } from "react";
function useTimers() {
    const [time, setTime] = useState((new Date()).toTimeString());

    setInterval(() => {
        setTime((new Date()).toTimeString());
    }, 2000);

    return time;
}

export default useTimers;