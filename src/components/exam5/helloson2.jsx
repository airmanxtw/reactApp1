import React from "react";
const helloson2 = React.memo(function Helloson2(props) {
    console.log('helloson2 created!');
    return <div>
        this is set2
        <button onClick={props.click}>son2 add</button>
    </div>
});

export default helloson2;