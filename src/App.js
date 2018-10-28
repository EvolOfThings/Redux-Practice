import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <h1>Redux</h1>

       <footer>Redux practice</footer>
       <p>Redux learning project</p>
      </div>
    );
  }
}

export default App;
