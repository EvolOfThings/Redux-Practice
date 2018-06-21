import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <h1 {{textAlign:'center'}}>Redux</h1>

       <footer>Redux practice</footer>
      </div>
    );
  }
}

export default App;
