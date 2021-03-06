import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {'pathname':'/'};

  }
  checkActive = () => {
   
  }


  
  render() {
    return (
      <Fragment>

        <div className="sidenav">
          <NavLink isActive={this.checkActive()} to="/basic">Basic Information</NavLink>
          <NavLink isActive={this.checkActive()} to="/carpentry">Loose Carpentry</NavLink>
          <NavLink isActive={this.checkActive()} to="/electrical">Electrical</NavLink>
          <NavLink isActive={this.checkActive()} to="/civil">Civil</NavLink>
          <NavLink isActive={this.checkActive()} to="/landscope">Landscope</NavLink>
          <NavLink isActive={this.checkActive()} to="/hvac">HVAC</NavLink>
          <NavLink isActive={this.checkActive()} to="/fire-sefty">Fire Safty</NavLink>
          <NavLink isActive={this.checkActive()} to="/modular-kitchen">Modular Kitchen</NavLink>
        </div>
        <div className="main">
          <div className="navbar  navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className={"nav-item active"}>
                  Admin Name
                </li>
              </ul>
            </div>&nbsp;
        </div>

          {this.props.children}
        </div>
      </Fragment>
    )
  }

}
export default SideBar;
