// My version idea: Contacts Rolodex, Book Library, Music Library
import React , {Component} from 'react';

import { CardList } from './components/card-list/CardListComponent';
import { SearchBox } from './components/search-box/SearchBox';

import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: ''
    };

    
  }
// mounting is when react renders page before executing the code
// inside the compdidMount() lifecycle method
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    // we are taking the response from fetch('url') n converting it into json format
    .then(response => response.json())
    .then(users => this.setState({ monsters:users }) )
    // u only call a .then() on a resolve promise that wraps around 
    // the resolve value and passed back down to the next chained 
    // .then()
}
  // always write class methods with arrow func to prevent binding
  handleChange = (e) => {
    // lexical scoping to bind 'this' to the constructor
    this.setState({ searchField: e.target.value });
  }

  render() {
    // destructering the states monster n seachF
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster => 
    // toLowerCase prevents case sensitive search
    // we are checkin to see whether values in search box matches names in the state
      monster.name.toLowerCase().includes(searchField.toLowerCase()));
    
      return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters= {filteredMonsters} />
    {/* code inbetween in the component is accessed with props.children */}
          
      </div>
    );
}
}

export default App;
