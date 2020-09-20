import React from "react"
const UploadDrawing = (props) => {
    return (

        <div className="row" >
            <div className="col-sm-12">
                <div className="form-group ">
                    <input type="file" placeholder="Upload Drawing 1" name="uploadDrawing1"  className="form-control " />
                </div>
            </div>
            <div className="col-sm-12">
                <div className="form-group ">
                    <input type="file" placeholder="Upload Drawing 1" name="uploadDrawing2"  className="form-control " />
                </div>
            </div>
            <div className="col-sm-12">
                <div className="form-group ">
                    <input type="file" placeholder="Upload Drawing 1" name="uploadDrawing3"  className="form-control " />
                </div>
            </div>
        </div >
    )
}
export default UploadDrawing;
