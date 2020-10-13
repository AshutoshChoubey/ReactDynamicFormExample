import React, { Component, Fragment } from "react";
import MaterialName from "./MaterialName"
import Labour from './Labour';

class Carpentry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            matrialList: [{ index: Math.random(), materialDisplayName: "Display Material Name1", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name2", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name3", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name4", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name5", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            ],
            labourList: [{ index: Math.random(), materialDisplayName: "Display  Name1", area: false, startDate: "", endDate: "", startTime: "", endTime: "", descripition: "", skilled: "", semiskilled: "", nonskilled: "", totalWork: "", uploaddrawing: "" },
            ],
            wardrobe: true,
        }
    }
    handleChange = (e) => {

        if (["amount", "brandSpeci", "date", "time"].includes(e.target.name)) {
            let matrialList = [...this.state.matrialList]
            matrialList[e.target.dataset.id][e.target.name] = e.target.value;
        }
        else if (["area", "startDate", "endDate", "startTime", "endTime", "descripition", "skilled", "semiskilled", "nonskilled", "totalWork", "uploaddrawing"].includes(e.target.name)) {
            let labourList = [...this.state.labourList]
            labourList[e.target.dataset.id][e.target.name] = e.target.value;
        }
        else if (["materialName"].includes(e.target.name)) {

            let matrialList = [...this.state.matrialList]
            console.log(matrialList[e.target.dataset.id][e.target.name])
            if (matrialList[e.target.dataset.id][e.target.name] === true || matrialList[e.target.dataset.id][e.target.name] === 'on') {
                matrialList[e.target.dataset.id][e.target.name] = false;
            }
            if (matrialList[e.target.dataset.id][e.target.name] === false || matrialList[e.target.dataset.id][e.target.name] === "false") {
                matrialList[e.target.dataset.id][e.target.name] = true;
            }
            //this.setState({ [e.target.name]: e.target.value })
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }
    checkboxValue = (name, val) => {

    }
    addLabour = (e) => {
        this.setState((prevState) => ({
            labourList: [...prevState.labourList, { index: Math.random(), materialDisplayName: "Display  Name1", area: false, startDate: "", endDate: "", startTime: "", endTime: "", descripition: "", skilled: "", semiskilled: "", nonskilled: "", totalWork: "", uploaddrawing: "" }],
        }));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    submitMaterial = (e) => {
        e.preventDefault();
        console.log(this.state.matrialList)
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
                                    <a className="nav-link active">Complex Form</a>
                                </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.handleSubmit} onChange={this.handleChange} >
                                <div className="row scrollmenu"  >
                                    {
                                        this.state.matrialList.map((val, idx) => {
                                            return (
                                                <div key={val.index} className="col-sm-3" ><MaterialName checkboxValue={this.checkboxValue} idx={idx} passedData={val} /></div>
                                            )
                                        })

                                    }

<div className="col-sm-2">
<button type="button" onClick={this.submitMaterial} className="btn btn-primary text-center">Order</button>
</div>
                                </div>

                                {
                                    this.state.labourList.map((val, idx) => {
                                        return (
                                            <div  className="row" key={val.index}  ><div className="col-sm-12" ><Labour addLabour={this.addLabour} idx={idx} passedData={val} /></div></div>
                                        )
                                    })

                              }
                              

                                <div className="card-footer text-center"> <button type="submit" className="btn btn-primary text-center">Submit</button></div>
                            </form>
                        </div>
                    </div>



                </div>

            </Fragment>
        )
    }

}
export default Carpentry;
