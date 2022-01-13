import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello World!'
    }
  }

  render() {
    // Toggle SET State 
    const toggle = () => {
      const newString = 'Bye Bye World';
      const toggleString = this.state.string !== newString ? newString : 'Hello World!'
      
      // BUILDIN FUNTION TO SET STATE 
      this.setState({
        string: toggleString
      });
    }

    return (
      <div className="App" >
        <header className="App-header">
          {this.state.string}

          <button onClick={toggle}>Klick mich</button>
        </header>
      </div>
    );
  }
}

export default App;
