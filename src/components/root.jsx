// import { AppBar, Container, IconButton, Toolbar } from "@material-ui/core";
// import { red } from "@material-ui/core/colors";
// import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
// import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import AnyLabel from "./exam9/AnyLabel.jsx";

class Root extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <AnyLabel tag="strong">this is strong</AnyLabel>
      </div>
    );
  }
}

export default Root;
