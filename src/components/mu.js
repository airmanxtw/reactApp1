// * 九九乘法表 by react
import React from "react";
class Mu extends React.Component {
    render() {
        return <table>
            {
                [2, 6].map(c =>
                    <tr key={c}>
                        {
                            [...Array(5).keys()].filter(f => f > 0).map(d =>
                                <td key={d}>
                                    {
                                        [...Array(10).keys()].filter(f => f > 0).map(e =>
                                            <div key={e}>
                                                {c + d - 1}x{e}={(c + d - 1) * e}
                                            </div>
                                        )
                                    }
                                </td>
                            )
                        }
                    </tr>
                )
            }
        </table>
    }
}
export default Mu