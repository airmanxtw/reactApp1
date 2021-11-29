import { Container } from "@material-ui/core";
import React from "react";
import TestTimer from "./exam7/testTimer";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <TestTimer/>
            </Container>
        </div>
    }
}

export default Root;