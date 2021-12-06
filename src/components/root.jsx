import { Container } from "@material-ui/core";
import React from "react";
import StudForm2 from "./exam9/StudForm2";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <StudForm2 />
            </Container>
        </div>
    }
}

export default Root;