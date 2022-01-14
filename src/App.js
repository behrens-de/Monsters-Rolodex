import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      string: 'Hello World!',
      monsters: [],
      searchField: '',

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
    // const toggle = () => {
    //   const newString = 'Bye Bye World';
    //   const toggleString = this.state.string !== newString ? newString : 'Hello World!'

    //   // BUILDIN FUNTION TO SET STATE 
    //   this.setState({
    //     string: toggleString
    //   });
    // }

    // Filter the Monsters
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })



    // Return = JSX in JSX {S Expresions in this brakets}
    // JSX Attributes - className - onClick - src
    return (
      <div className="App" >
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={'suche Monster...'}
          handleChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList
          monsters={filterdMonsters}
        />
      </div>
    );
  }
}

export default App;
