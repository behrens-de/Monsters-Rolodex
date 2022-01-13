import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello World!',
      monsters: []

    }
  }

  componentDidMount() {
    // Wenn die Componente das erste mal geladen wird und der State inizialisiert wird
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
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
          return (
 
              <div>
                <img src="https://placekitten.com/640/360"/>
                <h2 key={monster.id}>{monster.name}</h2>
                <h3>{monster.email}</h3>
              </div>
            
          )
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
