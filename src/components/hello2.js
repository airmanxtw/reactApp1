import React from "react";
class Hello2 extends React.Component {
    render() {
        return <h1>hello2 ~ {this.state.date.toLocaleTimeString()}</h1>
    }

    constructor() {
        super();
        this.state = { date: new Date() };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

}

export { Hello2 }