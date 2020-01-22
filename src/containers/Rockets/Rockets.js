import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addRocketChoice, addDestination } from '../../actions';
import './Rockets.css';
import LEO from '../../images/LEO.jpg';
import GTO from '../../images/GTO.jpg';
import moon from '../../images/moon.jpg';
import mars from '../../images/mars.jpg';
import pluto from '../../images/pluto.png';

export class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      rocketChoice: '',
    };
  }

  handleDestination = (destination) => {
    this.setState({ destination: destination })
    this.props.addDestination(destination)
  }

  handleRocket = (rocket) => {
    this.setState({ rocketChoice: rocket.name });
    this.props.addRocketChoice(rocket);
  }

  createRockets = (availableRockets) => {
    return availableRockets.map(rocket => {
      return (
        <div className="rocket-card" key={rocket.id}>
          <img className="rocket_image" src={rocket.image} alt={rocket.name}/>
          <p>{rocket.name}</p>
          <p>${rocket.cost}</p>
          <input className="rocket_input" onClick={() =>{this.handleRocket(rocket)}} type="radio" name="chooseRocket" value={rocket.name}/>
        </div>
      )
    })
  }

  getAvailableRockets = () => {
    let currentDestination = this.props.proposals[this.props.proposals.length - 1].destination;
    let availableRockets = [];
    this.props.rockets.forEach(rocket => {
      rocket.payloads.forEach(payload => {
        if (payload.id === currentDestination){
          availableRockets.push(rocket);
        }
      })
    })
    let mappedRockets = this.createRockets(availableRockets);
    return mappedRockets
  }

  render() {
    return (
      <>
        <h2 id="where_prompt">Where do you want to go?</h2>
        <section className="destinations">
          <div className="destination-card" onClick={() =>{ this.handleDestination("leo")}}>
            <p className="destination_p">Low Earth Orbit</p>
            <img className="destination_image" src={LEO} alt="LEO" />
          </div>
          <div className="destination-card" onClick={() =>{ this.handleDestination("gto")}}>
            <p className="destination_p">Geostationary Transfer Orbit</p>
            <img className="destination_image" src={GTO} alt="GTO" />
          </div>
          <div className="destination-card" onClick={() =>{ this.handleDestination("moon")}}>
            <p className="destination_p">Moon</p>
            <img className="destination_image" src={moon} alt="Moon" />
          </div>
          <div className="destination-card" onClick={() =>{ this.handleDestination("mars")}}>
            <p className="destination_p">Mars</p>
            <img className="destination_image" src={mars} alt="Mars" />
          </div>
          <div className="destination-card" onClick={() =>{ this.handleDestination("pluto")}}>
            <p className="destination_p">Pluto</p>
            <img className="destination_image" src={pluto} alt="Pluto" />
          </div>
        </section>
        <section className="rockets">
          {this.props.proposals[this.props.proposals.length -1].destination ? 
            this.getAvailableRockets()
            : null
          }
        </section>
        <section className="rocket-footer">
          <h3 className="rocket-footer_h3">Destination: 
            {this.state.destination}
          </h3>
          <h3 className = "rocket-footer_h3"> Rocket Choice: 
            {this.state.rocketChoice}
          </h3>
          {(this.state.destination !== '' && this.state.rocketChoice !== '') ? <Link to='/overview'><button >Continue To Overview</button></Link> : null}
        </section>
      </>
    )
  }
};

export const mapStateToProps = (state) => ({
  proposals: state.proposals,
  rockets: state.rockets,
});

export const mapDispatchToProps = (dispatch) => ({
  addDestination: (destination) => dispatch(addDestination(destination)),
  addRocketChoice: (rocket) => dispatch(addRocketChoice(rocket))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);

Rockets.propTypes = {
  proposals: PropTypes.array,
  rockets: PropTypes.array,
  addDestination: PropTypes.func,
  addRocketChoice: PropTypes.func,
  destination: PropTypes.string,
  rocketChoice: PropTypes.string
}