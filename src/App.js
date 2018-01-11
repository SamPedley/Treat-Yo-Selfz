import React, { Component } from 'react';
import './App.css';
import Total from './Containers/Purchases';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="jumbotron">
          <h1>Treat Yo Self</h1>
        </header>
        <div className='container'> 
        <Total user='lizzie' />
        <Total user='sam' />
        </div>
      </div>
    );
  }
}

export default App;
