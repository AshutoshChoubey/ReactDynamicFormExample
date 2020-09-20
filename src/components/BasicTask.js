import React, { Component } from "react";

class BasicTask extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
        return (
            <div className="card">
                <div className="card-body" >
                    <h2 className="card-title">Task</h2>
                    <div className="row" >
                        <div className="col-sm-8 form-group" > <h3 className="card-title">Fixed Carpentry Work</h3> <div className="form-group form-check form-check-inline">
                            <label className="form-check-label">Pelmet</label> &emsp;
                            <input type="checkbox"  onChange={ ()=>this.props.checkboxValue("pelmet",this.props.taskData.pelmet)} value={this.props.taskData.pelmet}  name="pelmet" className="form-check-input" /></div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-8 form-group" >
                        <h3 className="card-title">Fixed Carpentry Work</h3>
                             <div className="form-group form-check form-check-inline">

                        <label className="form-check-label">Wardrobe</label> &emsp;
                            <input type="checkbox"  onChange={ ()=>this.props.checkboxValue("wardrobe",this.props.taskData.wardrobe)} value={this.props.taskData.wardrobe} name="wardrobe" className="form-check-input" />
                            <label className="form-check-label">Bed</label> &emsp;
                            <input type="checkbox"  name="bed" className="form-check-input" />
                            <label className="form-check-label">Bed Side Table</label> &emsp;
                            <input type="checkbox"  onChange={ ()=>this.props.checkboxValue("bedSideTable",this.props.taskData.bedSideTable)} value={this.props.taskData.bedSideTable} name="bedSideTable" className="form-check-input" />
                            </div></div>
                    </div>
                    <div className="row" >
                        <div className="col-sm-8 form-group" >
                        <h3 className="card-title">Partition</h3>
                             <div className="form-group form-check form-check-inline">

                        <label className="form-check-label">Wooden Portion</label> &emsp;
                            <input type="checkbox"  onChange={ ()=>this.props.checkboxValue("woodenportion",this.props.taskData.woodenportion)} value={this.props.taskData.woodenportion} name="woodenportion" className="form-check-input" />
                            <label className="form-check-label">Door and windows</label> &emsp;
                            <input type="checkbox"  onChange={ ()=>this.props.checkboxValue("doorAndWindows",this.props.taskData.doorAndWindows)} value={this.props.taskData.doorAndWindows} name="doorAndWindows" className="form-check-input" />
                            </div></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default BasicTask;
