import React, { Component } from "react";

class Supervisor extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="card">
                <div className="card-body" >
                <h5 className="card-title">Supervisor</h5>
                    <div className="row" >
                        <div className="col-sm-12" > <div className="form-group "><input type="text" placeholder="superDropdown" name="superDropdown" className="form-control" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-6" > <div className="form-group "><input type="text"  placeholder="superCal1" name="superCal1" className="form-control" /></div></div>
                        <div className="col-sm-6" > <div className="form-group "><input type="text" placeholder="superCal2"    name="superCal2" className="form-control" /></div></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Supervisor;
