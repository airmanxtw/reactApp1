import React from "react";
class Hello3 extends React.Component {
    constructor() {
        super();
        this.state = {
            testkey: ''
        }
        this.onChagne = this.onChagne.bind(this);
    }

    onChagne(event) {
        this.setState({ testkey: event.target.value });
    }

    render() {
        return <div>
            <div>{this.state.testkey}</div>
            <input value={this.state.testkey} onChange={this.onChagne}></input>
        </div>
    }
}

export default Hello3;