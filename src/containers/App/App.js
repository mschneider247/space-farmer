import React, { Component } from 'react';
import './App.css';
import { getRocketData } from '../../apiCalls/apiCalls';
import Welcome from '../Welcome/Welcome'
import Nav from '../Nav/Nav'
import Supplies from '../Supplies/Supplies'
import { Route, Switch } from 'react-router-dom';
import ProposalContainer from '../ProposalContainer/ProposalContainer';

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
        <Switch>
          <Route exact path="/"
          render ={() => {
            return (
              <Welcome />
            )
          }}/>
          <Route path="/proposals"
          render = {() => {
            return (
              <>
                <Nav />
                <ProposalContainer />
              </>
            )
          }}/>
          <Route path="/supplies"
          render = {() => {
            return (
              <>
                <Nav />
                <Supplies />
              </>
            )
          }}/>
        </Switch>
      </main>
    )
  }
}

export default App;