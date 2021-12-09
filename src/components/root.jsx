import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import StudForm2 from "./exam9/StudForm2";

class Root extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <div>
            <AppBar position="static" >
                <Toolbar>
                    <IconButton>
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <StudForm2 studno="A12345" />
            </Container>
        </div>
    }
}

export default Root;