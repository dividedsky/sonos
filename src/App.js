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
      .then(res => {
        console.log(res);
        const players = res.data;
        this.setState({players: players});
      })
      .catch(err => console.log());
  }

  render() {
    return (
      <div className="App">
        <h1>sonos players</h1>
        {this.state.players.length &&
          this.state.players.map((p, i) => <h2 key={i}>{p.host}</h2>)}
      </div>
    );
  }
}

export default App;
