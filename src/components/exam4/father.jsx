import React,{useState, createContext} from "react";
import Content from "./content";
import Sun from "./sun";
function Father(){
    let [counter,setCounter]=useState(0);
    let add=()=>{
        setCounter(counter+1);
    }
    return <div>
        {counter}
        <Content.Provider value={counter}>
            <Sun/>
        </Content.Provider>
        <button onClick={()=>{add()}}>+</button>
    </div>
}

export default Father;