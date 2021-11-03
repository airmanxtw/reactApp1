import React from "react";
class Title extends React.Component {
    constructor(props) {
        super(props);
        //this.state = { value: props.value }
    }
    render() {
        return <h5>{this.props.value}</h5>
    }
}

export default Title;