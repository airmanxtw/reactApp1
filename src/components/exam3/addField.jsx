import React, { useState, useEffect } from "react";
import useTimers from "./timer";
function AddField() {
    const [counter, setCounter] = useState(0);
    const [cars, setCars] = useState([]);
    let addCounter = () => {
        setCounter(counter + 1);
    };
    let add = () => {
        addCounter();
        setCars(cars => [...cars, { key: counter, id: '', desc: '' }]);
    };
    let del = (key) => {
        setCars(cars.filter(item => item.key != key));
    };
    return (
        <div>
            {time}<br />
            {
                cars.map((c, index) => <div key={index}>
                    <input placeholder="車型代碼" value={c.id} onChange={(e) => update("id", index, e.target.value)} />
                    <input placeholder="車型描述" value={c.desc} onChange={(e) => update("desc", index, e.target.value)} />
                    <button onClick={() => del(c.key)}>刪除</button>
                </div>
                )
            }
            <button onClick={() => add()}>+</button>
        </div>
    );
}
export default AddField;