import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid'
import Appbar from './components/Appbar'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Appbar/>       <br/> 
        <Grid />
      </div>
    );
  }
}

export default App;
