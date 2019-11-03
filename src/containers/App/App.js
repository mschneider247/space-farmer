import React, { Component } from 'react';
import './App.css';
import { getRocketData } from '../../apiCalls/apiCalls';
import { connect } from 'react-redux';
import Welcome from '../Welcome/Welcome';
import Nav from '../Nav/Nav';
import Supplies from '../Supplies/Supplies';
import Rockets from '../Rockets/Rockets';
import Overview from '../Overview/Overview';
import { Route, Switch } from 'react-router-dom';
import ProposalContainer from '../ProposalContainer/ProposalContainer';
import { setData } from '../../actions';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }

  async componentDidMount() {
    try {
      const rocketData = await getRocketData();
      this.setState({ data: rocketData});
      rocketData.forEach(rocket => console.log(rocket));
      const cleanRockets = rocketData.map(rocket => {
        return {
              // what do you take out of all that rocket data??
              //rocket_name
              //cost_per_launch
              //payload_weights
              //success_rate_pct
              id: rocket.id,
              name: rocket.rocket_name,
              cost: rocket.cost_per_launch,
              payloads: rocket.payload_weights,
              successRate: rocket.success_rate_pct
        }
      });
      this.props.setData(cleanRockets);
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

export const mapDispatchToProps = dispatch => ({
  setData: rockets => dispatch(setData(rockets))
})

export default connect(null, mapDispatchToProps)(App)