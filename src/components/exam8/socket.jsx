import { Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useEffect, useState } from "react";
function Socket() {
    let [data, setData] = useState([]);
    useEffect(() => {
        let websocket = new WebSocket("wss://demo.sewio.net");
        websocket.onopen = () => {
            websocket.send(
                '{"headers":{"X-ApiKey":"171555a8fe71148a165392904"},"method":"subscribe","resource":"/feeds/8"}'
            );
        };
        websocket.onmessage = (res) => {
            setData([...data, ...JSON.parse(res.data).body.datastreams]);
        };
    }, []);
    return <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>current_value</TableCell>
                    <TableCell>at</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((item) =>
                        <TableRow key={item.id}>
                            <TableCell>{item.id}</TableCell>
                            <TableCell>{item.current_value}</TableCell>
                            <TableCell>{item.at}</TableCell>
                        </TableRow>
                    )
                }
            </TableBody>
        </Table>
    </div>
}

export default Socket;