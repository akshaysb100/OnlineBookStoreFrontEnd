import React, {Component} from 'react';
import './App.css';
import Routing from "./router";
import Appbar from "./components/Appbar";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component{

    render(){
      return (
          <div className="container">
              <Appbar />
              <Routing />
          </div>
      );
    }
}

export default App;
