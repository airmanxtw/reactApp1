import { AppBar, Button, Toolbar } from "@material-ui/core";
import { ArrowBack, DeleteRounded, DeleteSweepTwoTone } from "@material-ui/icons";
import React, { useReducer } from "react";
let TestUi = function () {
    let reducer = (state, type) => {
        switch (type) {
            case "add":
                return state + 1;
            case "double":
                return state * 2;
            default:
                return state;
        }
    };
    let [ count, dispatch ]= useReducer(reducer, 0);
    return <div>
        {count}<br/>
        <button onClick={()=>{ dispatch("add")} }>test</button>
    </div>
}

export default TestUi;