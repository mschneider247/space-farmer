import React, { Component } from 'react';
import './App.css';
import { getRocketData } from '../../apiCalls/apiCalls';
import Welcome from '../Welcome/Welcome';
import Nav from '../Nav/Nav';
import Supplies from '../Supplies/Supplies';
import Rockets from '../Rockets/Rockets';
import Overview from '../Overview/Overview';
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
          <Route path="/rockets"
          render = {() => {
            return (
              <>
                <Nav />
                <Rockets />
              </>
            )
          }}/>
          <Route path="/overview"
          render = {() => {
            return (
              <>
                <Nav />
                <Overview />
              </>
            )
          }}/>
        </Switch>
      </main>
    )
  }
}

export default App;