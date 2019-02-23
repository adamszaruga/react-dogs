import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DogList from './DogList.js';
import Dog from './Dog.js'
import { buttonStyle } from './styles'
import { Route } from 'react-router-dom'; 
let AppStyle = {
  color: 'Red'
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={DogList} />
        <Route path="/:dog" component={Dog} />
      </div>
    );
  }
}

export default App;
