import { blueGrey, deepOrange, green } from "@material-ui/core/colors";
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import React from "react";


let TestTable = function () {
    const useStyles = makeStyles({
        root: {
            color: deepOrange.A700,
            background: "white",
            padding: 10
        }
    });

    return <div>
        <Table sx={{ maxWidth: 400 }} size="small" >
            <TableHead>
                <TableRow>
                    <TableCell>
                        學號
                    </TableCell>
                    <TableCell>
                        姓名
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>12345</TableCell>
                    <TableCell>顏大鈞</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        <div className={useStyles().root}>1234</div>
    </div >
}

export default TestTable;