import { Container } from "@material-ui/core";
import React from "react";
import TestTable from "./exam7/testTable";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <Container>
                <TestTable />
            </Container>
        </div>
    }
}

export default Root;