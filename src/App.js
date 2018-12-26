import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      server: 'http://localhost:5000',
      players: [],
    };
  }
  componentDidMount() {
    axios
      .get(`${this.state.server}`)
      .then(res => console.log(res))
      .catch(err => console.log());
    axios
      .get(`${this.state.server}/players/`)
      .then(res => console.log(res))
      .catch(err => console.log());
  }
  render() {
    return <div className="App" />;
  }
}

export default App;
