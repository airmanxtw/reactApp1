import React, { useState } from "react";
import Helloson from "./helloson";
function Hello() {
    console.log("hello! created!");
    let [counter, setCounter] = useState(0);
    return <div>
        counter:{counter}
        <button onClick={() => { setCounter(counter + 1) }}>+</button>
        <br />
        <Helloson />
    </div>
}

export default Hello;