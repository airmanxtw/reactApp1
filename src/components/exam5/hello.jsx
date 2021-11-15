import React, { useCallback, useState } from "react";
import Helloson from "./helloson";
function Hello() {
    console.log("hello! created!");
    let [counter, setCounter] = useState(0);
    let [counter2, setCounter2] = useState(0);
    const sonclick = useCallback(() => { setCounter(counter) },[counter2]);
    // let sonclick=()=>{
    //     setCounter(counter + 1)
    // };
    return <div>
        counter:{counter}-
        <button onClick={() => { setCounter(counter + 1) }}>+</button>
        <br />
        <Helloson name="airmanx" click={sonclick} />
    </div>
}

export default Hello;