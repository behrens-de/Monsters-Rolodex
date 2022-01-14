import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

  // Wenn die Componente das erste mal geladen wird und der State inizialisiert wird
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // Input is change
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    // Filter the Monsters
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })

    return (
      <div className="App" >
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder={'suche Monster...'}
          handleChange={this.handleChange}
        />
        <CardList
          monsters={filterdMonsters}
        />
      </div>
    );
  }
}

export default App;
