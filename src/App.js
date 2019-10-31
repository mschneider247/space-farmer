import React, { Component } from 'react';
import './App.css';
import { getRocketData } from './apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: undefined
    }
  }

  async componentDidMount() {
    try {
      const rocketData = await getRocketData();
      this.setState({ data: rocketData});
    } catch ({message}) {
      console.log('Something Broke!', message)
    }
  }

  render () {
    console.log(this.state.data)
    let rockets;
    if (this.state.data !== undefined) {
      rockets = this.state.data.map(rocket => {
        return <p>{rocket.rocket_name}</p>
      })
    }

    return (
      <main>
        <h1>SPACE FARMER</h1>
        <p>Rocket Stuff:</p>
        {rockets}
      </main>
    )
  }
}

export default App;