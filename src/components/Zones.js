import React from "react"
const Zones = (props) => {
  return (
    props.zone.map((val, idx) => {
      let zoneOp1 = `zoneOp1-${idx}`, zoneOp2 = `area-${idx}`
      return (
        <div className="row" key={val.index}>
          <div className="col-sm-5">
            <input type="text" placeholder={zoneOp1}  name="zoneOp1" data-id={idx} id={zoneOp1} className="form-control " />
          </div>
          <div className="col-sm-5">
            <input type="text" placeholder={zoneOp2}  name="area" id={zoneOp2} data-id={idx} className="form-control " />
          </div>
          <div className="col-sm-2">
            {
            idx===(props.zone.length-1)?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center">+</button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} >-</button>
            }
          </div>
        </div >
      )
    })
  )
}
export default Zones