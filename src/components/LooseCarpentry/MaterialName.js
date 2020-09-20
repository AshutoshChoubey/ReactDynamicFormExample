import React, { Component } from "react";

class MaterialName extends Component {
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

        <label className="form-check-label">{this.props.passedData.materialDisplayName}</label> &emsp;
                            <input type="checkbox" data-id={this.props.idx} onChange={() => this.props.checkboxValue("materialName", this.props.passedData.materialName)} value={this.props.passedData.materialName} name="materialName" className="form-check-input" />
                    </div>

                    <div className="row" >
                        <div className="col-sm-8" > <div className="form-group "><input type="text" placeholder="Amount" name="amount" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-12" > <div className="form-group "><input type="text" placeholder="Brand. Speci" name="brandSpeci" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-6" > <div className="form-group "><input type="date" placeholder="Date" name="date" data-id={this.props.idx}  className="form-control" /></div></div>
                        <div className="col-sm-6" > <div className="form-group "><input type="time" placeholder="Time" name="time" data-id={this.props.idx}  className="form-control" /></div></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default MaterialName;
