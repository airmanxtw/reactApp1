import React, { createContext, useContext } from "react";
import Content from "./content";
function Sun(){
    let message=useContext(Content);
    return <div>
        my sun~{message}
    </div>
}

export default Sun;