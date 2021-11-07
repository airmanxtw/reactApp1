import React from "react";
import Fun1 from "./exam2/f1";
import AddField from "./exam3/addField";
class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <AddField />
        </div>
    }
}

export default Root;