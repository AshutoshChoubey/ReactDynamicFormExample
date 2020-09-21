import React, { Component, Fragment } from "react";
import MaterialName from "./MaterialName"

class Carpentry extends Component {
    constructor(props) {
        super(props);

        this.state = {

            matrialList: [{ index: Math.random(), materialDisplayName: "Display Material Name", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", materialName: false, amount: "", brandSpeci: "", date: "", time: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", materialName: false, amount: "", brandSpeci: "", date: "", time: "" }, 
            ],
            labourList: [{ index: Math.random(), materialDisplayName: "Display Material Name", area: false, startDate: "", endDate: "", startTime: "", endTime: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", area: false, startDate: "", endDate: "", startTime: "", endTime: "" },
            { index: Math.random(), materialDisplayName: "Display Material Name", area: false, startDate: "", endDate: "", startTime: "", endTime: "" },
            ],
            wardrobe: true,

        }
    }
    handleChange = (e) => {

        if (["amount","brandSpeci","date","time"].includes(e.target.name)) {
            let matrialList = [...this.state.matrialList]
            matrialList[e.target.dataset.id][e.target.name] = e.target.value;
        } 
        else if (["area","startDate","endDate","startTime","endTime"].includes(e.target.name)) {
            let labourList = [...this.state.matrialList]
            labourList[e.target.dataset.id][e.target.name] = e.target.value;
        }
        else if (["materialName"].includes(e.target.name)) {
            
            let matrialList = [...this.state.matrialList]
            console.log(matrialList[e.target.dataset.id][e.target.name])
            if (matrialList[e.target.dataset.id][e.target.name] === true || matrialList[e.target.dataset.id][e.target.name] === 'on') {
                 matrialList[e.target.dataset.id][e.target.name] = false;
            }
            if (matrialList[e.target.dataset.id][e.target.name] === false ||matrialList[e.target.dataset.id][e.target.name] === "false") {
                 matrialList[e.target.dataset.id][e.target.name] = true;
            }
            //this.setState({ [e.target.name]: e.target.value })
        }
        else {
            this.setState({ [e.target.name]: e.target.value })
        }

    }
    checkboxValue = (name, val) => {

        // if (val === true || val === 'on') {
        //     console.log("val", val);
        //     this.setState({ [name]: false })
        // }
        // if (val === false || val === "false") {
        //     this.setState({ [name]: true })
        // }
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
                                    <a className="nav-link active">Wardrobe</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link ">Bed</a>
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

                                    
                                </div>

                                {
          this.state.labourList.map((val, idx) => {
        return (
            <div className="row" key={val.index}  ><div  className="col-sm-12" ><MaterialName  idx={idx} passedData={val} /></div></div>
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
