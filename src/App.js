import React, {Component} from 'react';
import './App.css';
import FetchBooksData from './components/FetchBooksData'
import Appbar from './components/Appbar'

class App extends Component{

    render(){
      return (
          <div className="container">
            <Appbar/>       <br/>
            <br/><br/>
            <FetchBooksData />
          </div>
      );
    }
}

export default App;
