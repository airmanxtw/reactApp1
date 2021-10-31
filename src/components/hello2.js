import React from "react";
class Hello2 extends React.Component {
    render() {
        return <h1>
            hello2 ~ {this.state.date.toLocaleTimeString()}
            <br />
            {this.state.showB &&
                <button onClick={this.sayHello}>click</button>
            }
        </h1>
    }

    sayHello = () => {
        alert(this.state.date.toDateString());
    }

    constructor() {
        super();
        this.state = { date: new Date(), showB: false };
        //this.sayHello = this.sayHello.bind(this);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

}

export { Hello2 }