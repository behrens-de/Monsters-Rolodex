import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello World!',
      monsters: [
        { name: 'Frankenstein', id: 'asc1' },
        { name: 'Dracula', id: 'asc2' },
        { name: 'Zombie', id: 'as1w'}
      ]
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



    // Return = JSX in JSX {S Expresions in this brakets}
    // JSX Attributes - className - onClick - src
    return (
      <div className="App" >
        {this.state.monsters.map(monster => {
          // Jedes Element brauch einen Uniq Key damit react sich auf dieses eine Element beim rerendern beziehen kann
          return (<h1 key={monster.id}>{monster.name}</h1>)
        })}
        {/* <header className="App-header">
          
          {this.state.string}

          <button onClick={toggle}>Klick mich</button>
        </header> */}
      </div>
    );
  }
}

export default App;
