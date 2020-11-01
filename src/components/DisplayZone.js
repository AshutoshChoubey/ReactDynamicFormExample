import React, { Component, Fragment } from "react";


class DisplayZone extends Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <Fragment>
                <table className="table ">
                    <thead>
                        <tr>
                            <td>Zone</td>
                            <td>Area</td>
                        </tr>
                    </thead>
                    <tbody>
                    { this.props.data1.map((val, idx) => {
                    return (
                        <tr key={val.index}>
                        <td>{ val.zoneOp1 }</td>
                        <td>{ val.area }</td>
                    </tr>
                    )
                    }) }

                       
                    </tbody>


                </table>
            </Fragment>
        )

    }
}
export default DisplayZone;