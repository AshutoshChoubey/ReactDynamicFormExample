import React, { Component } from "react";

class Labour extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props);
    }
    render() {
        return (
            <div className="card">
                <div className="card-body" >
                    <div className="form-group form-check form-check-inline">
                    {this.props.passedData.materialDisplayName}
       </div>

                    <div className="row" >
                        <div className="col-sm-8" > <div className="form-group "><input type="text" placeholder="Area" name="area" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-6" > <div className="form-group "><input type="date" placeholder="Start Date" name="startDate" data-id={this.props.idx}  className="form-control" /></div></div>
                        <div className="col-sm-6" > <div className="form-group "><input type="date" placeholder="End Date" name="endDate" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-6" > <div className="form-group "><input type="time" placeholder="Start Time" name="startTime" data-id={this.props.idx}  className="form-control" /></div></div>
                        <div className="col-sm-6" > <div className="form-group "><input type="time" placeholder="End Time" name="endTime" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Labour;
