import React from "react";
const Helloson = React.memo(function Helloson(props) {
    console.log('helloson created!');
    return <div>
        this is son...{props.name}
        <button onClick={props.click}>hello~</button>
    </div>
});

export default Helloson;