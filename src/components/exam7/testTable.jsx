import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { red } from "@mui/material/colors";

let TestTable = function () {
    return <div>
        <Table sx={{ maxWidth: 400 }} size="small" className="red">
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
    </div >
}

export default TestTable;