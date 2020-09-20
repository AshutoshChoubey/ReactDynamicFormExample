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
        <Route path="/electrical" exact component={BasicInfo} />
        <Route path="/civil" exact component={BasicInfo} />
        <Route path="/landscope" exact component={BasicInfo} />
        <Route path="/fire-sefty" exact component={BasicInfo} />
        <Route path="/modular-kitchen" exact component={BasicInfo} />
      </SideBar>
    </Router>
    </div>
  );
}


export default App;
