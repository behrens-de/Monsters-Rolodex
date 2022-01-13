import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';

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
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
