import { Container } from "@material-ui/core";
import React from "react";
import StudForm from "./exam9/StudForm";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <StudForm />
            </Container>
        </div>
    }
}

export default Root;