import { AppBar, Button, Toolbar } from "@material-ui/core";
import { ArrowBack, DeleteRounded, DeleteSweepTwoTone } from "@material-ui/icons";
import React from "react";
let TestUi = function () {
    return <div>
        <AppBar position="absolute">
            <Toolbar>
                <h1>Hello</h1>
            </Toolbar>
        </AppBar>
        <Button variant="contained" startIcon={<ArrowBack />} >Hello</Button>
    </div>
}

export default TestUi;