import React from 'react';
import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import SideBar from './components/Sidebar'
import { BrowserRouter as Router,Route } from "react-router-dom";
import BasicInfo from './components/BasicInfo';
import Carpentry from './components/LooseCarpentry/Carpentry';

function App() {
  return (
    <div>
      <Router>
      <SideBar>
        <Route path="/" exact component={BasicInfo} />
        <Route path="/basic" exact component={BasicInfo} />
        <Route path="/carpentry" exact component={Carpentry} />
      </SideBar>
    </Router>
    </div>
  );
}


export default App;
