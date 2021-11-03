import React from "react";
import Title from "./exam/title";
class Root extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '123',
            max() {
                debugger;
            }
        }
        this.input = this.input.bind(this);
    }
    input(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        return <div>
            {this.state.value}
            <br />
            root component
            <br />
            <Title value={this.state.value} />
            <input value={this.state.value} onInput={this.input} max={this.state.max} />

        </div>
    }
}

export default Root;