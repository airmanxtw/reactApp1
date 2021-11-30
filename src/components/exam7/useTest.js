import React, { useEffect, useState } from "react";
let useTest=function(){
    let [t, setT]=useState('');
    setInterval(() => {
       setT((new Date()).toLocaleTimeString()); 
    }, 1000);
    useEffect(()=>{
        console.log('do useTest...'+t);
    })
    return t;
}

export default useTest;