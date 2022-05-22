import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    // calls the constructor of the parent class, i.e. Component
    super();
    this.state = {
      robots: [],
      searchField: ''
    };
  }

  // runs automatically
  componentDidMount() {
    // fetch is a method of the window object:
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <div className='tc'>
        <h1 className='f1'>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;

/*
# Alternative approach - using functions:

const App = () => {
  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </div>
  );
};

*/

/*
# Life cycle methods/hooks:
When React loads the page, it calls its methods automatically in the following order:
  constructor() -> render() -> componentDidMount() -> render() ..
*/
