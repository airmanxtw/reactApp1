import React, { useEffect, useState } from "react";
import useTest from "./useTest";
let TestTimer = React.memo(function () {
    let [time, setTime] = useState(0);
    let timer = useTest();

    return <div>
        {timer}
    </div>
});

export default TestTimer;