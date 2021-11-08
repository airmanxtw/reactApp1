import React, { useState } from "react";
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
            {
                cars.map(c => <div key={c.key}>
                    <input placeholder="車型代碼" />
                    <input placeholder="車型描述" />
                    <button onClick={() => del(c.key)}>刪除</button>
                </div>
                )
            }
            <button onClick={() => add()}>+</button>
        </div>
    );
}
export default AddField;