import { Container } from "@material-ui/core";
import React from "react";
import TestUi from "./exam6/testui";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <TestUi></TestUi>
            </Container>
        </div>
    }
}

export default Root;