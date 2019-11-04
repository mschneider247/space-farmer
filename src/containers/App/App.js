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
import { setRockets } from '../../actions';
import falcon1 from '../../images/falcon1.jpg';
import falcon9 from '../../images/falcon9.jpg';
import falconHeavy from '../../images/falconHeavy.jpg';
import starship from '../../images/starship.jpg';

export class App extends Component {

  async componentDidMount() {
    try {
      const rocketData = await getRocketData();
      const cleanRockets = rocketData.map(rocket => {
        return {
          id: rocket.id,
          name: rocket.rocket_name,
          cost: rocket.cost_per_launch,
          payloads: rocket.payload_weights,
          successRate: rocket.success_rate_pct,
          image: this.getRocketImage(rocket.id)
        }
      });
      this.props.setRockets(cleanRockets);
    } catch ({message}) {
      console.log('Something Broke!', message)
    }
  }

  getRocketImage = (rocketId) => {
    if (rocketId === 1) {
      return falcon1
    } else if (rocketId === 2) {
      return falcon9
    } else if (rocketId === 3) {
      return falconHeavy
    } else {
      return starship
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
  setRockets: rockets => dispatch(setRockets(rockets))
})

export default connect(null, mapDispatchToProps)(App)