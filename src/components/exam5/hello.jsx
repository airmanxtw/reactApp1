import React, { useCallback, useState } from "react";
import Helloson from "./helloson";
import Helloson2 from "./helloson2";
function Hello() {
    console.log("hello! created!");
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    const sonclick = useCallback(() => { setCounter(counter + 1) }, [counter]);
    const sonclick2 = useCallback(() => { setCounter2(counter2 + 1) }, [counter2]);
    return <div>
        counter:{counter}-{counter2}
        <button onClick={() => { setCounter(counter + 1) }}>+</button>
        <br />
        <Helloson name="airmanx" click={sonclick} />
        <Helloson2 name="airmanx" click={sonclick2} />
    </div>
}

export default Hello;