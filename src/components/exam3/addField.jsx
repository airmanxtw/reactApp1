import React, { useState } from "react";
function AddField() {
    // const [counter, setCounter] = useState(0);
    // const [cars, setCars] = useState([
    //     { key: 0, id: "123", desc: "hello" }
    // ]);
    // let addCounter = () => {
    //     setCounter(counter + 1);
    // };
    // let add = () => {
    //     addCounter();
    //     setCars(cars => [...cars, { key: counter, id: '', desc: '' }]);
    // };
    // let del = (key) => {
    //     setCars(cars => [cars.filter(item => item.key != key)]);
    // };
    let test = () => {
        alert('hllo2');
    };
    return (
        <div>
            <button onClick={(e) => test()}>+</button>
        </div>
    );
}

export default AddField;