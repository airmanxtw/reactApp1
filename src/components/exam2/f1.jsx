import React, { useState, useEffect } from "react";
function Fun1(props) {
    const [data, setData] = useState({ text: '',length:10 });
    let input = (val) => {
        setData({ text: val,length:data.length });
    };
    useEffect(() => {
        if (data.text.length > 10) {
            setData(data=>({...data, text: data.text.substring(0, 9) }));
        }
    }, [data.text]);
    return <div>
        {props.title} -- {data.text} -- {data.length}<br />
        <input onInput={(e) => input(e.target.value)}></input>
    </div>
}

export default Fun1