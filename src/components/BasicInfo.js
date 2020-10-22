import React, { Component, Fragment } from "react";
import BasicTask from "./BasicTask";
import Supervisor from "./Supervisor";
import UploadDrawing from "./UploadDrawing";
import Zones from "./Zones";

class BasicInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            superDropdown: "",
            superCal1: "",
            superCal2: "",
            zoneList: [{ index: Math.random(), zoneOp1: "", area: "" }],
            uploadDrawing1: "",
            uploadDrawing2: "",
            uploadDrawing3: "",
            showTask: false,
            pelmet: false,
            wardrobe: false,
            bed: false,
            bedSideTable: false,
            woodenportion: false,
            doorAndWindows: false

        }
    }
    handleChange = (e) => {

        if (["zoneOp1", "area"].includes(e.target.name)) {
            let zoneList = [...this.state.zoneList]
            zoneList[e.target.dataset.id][e.target.name] = e.target.value;
        } else if (e.target.type === "checkbox") {
            //this.setState({ [e.target.name]: e.target.value })
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }
    checkboxValue = (name, val) => {

        if (val === true || val === 'on') {
            console.log("val", val);
            this.setState({ [name]: false })
        }
        if (val === false || val === "false") {
            this.setState({ [name]: true })
        }
      //  console.log(this.state);


    }
    addNewRow = (e) => {
        this.setState((prevState) => ({
            zoneList: [...prevState.zoneList, { index: Math.random(), zoneOp1: "", area: "" }],
        }));
    }

    deteteRow = (index) => {
        this.setState({
            zoneList: this.state.zoneList.filter((s, sindex) => index !== sindex),
        });
    }
    clickOnDelete(record) {
        this.setState({
            zoneList: this.state.zoneList.filter(r => r !== record)
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.history.push("/carpentry");
    }
    showTask = (e) => {
        this.setState({ "showTask": true })

    }
    render() {
        let { zoneList } = this.state//let { carpentry, zoneList } = this.state
        return (
            <Fragment>
                <div className="content">
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                   INfo
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                                <div className="row" >
                                    <div className="col-sm-4" ><Supervisor /></div>
                                    <div className="col-sm-4" >
                                        <div className="card">
                                            <div className="card-body" >
                                                <h5 className="card-title">Zones</h5>
                                                <Zones add={this.addNewRow} delete={this.clickOnDelete.bind(this)} zone={zoneList} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-4" >
                                        <div className="card">
                                            <div className="card-body" >
                                                <h5 className="card-title">Upload Drawing</h5>
                                                <UploadDrawing />
                                            </div>
                                            <div className="card-footer" >
                                                <button type="button" onClick={this.showTask} className="btn btn-primary text-center"> {this.state.showTask ? "Edit" : "Submit"}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {this.state.showTask ? <BasicTask checkboxValue={this.checkboxValue} taskData={this.state} /> : ""}

                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default BasicInfo;
