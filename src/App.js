import React, {Component} from 'react';
import './App.css';
import Routing from "./router";
import CustomerDetails from "./components/CustomerDetails";
class App extends Component{

    render(){
      return (
          <div className="container">
              <CustomerDetails/>
          </div>
      );
    }
}

export default App;
