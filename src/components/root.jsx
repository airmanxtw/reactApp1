import { Container } from "@material-ui/core";
import React from "react";
import Socket from "./exam8/socket.jsx";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <Socket/>
            </Container>
        </div>
    }
}

export default Root;