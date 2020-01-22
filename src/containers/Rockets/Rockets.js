import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addRocketChoice, addDestination } from '../../actions';
import './Rockets.css';
import destinationData from './destinationData';

export class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      rocketChoice: '',
    };
  }

  handleDestination = (destination, picked) => {
    destinationData.forEach(destination => {
      destination.isChosen = false;
    })
    picked.isChosen = true;
    let pickedString = ' ' + picked.text
    this.setState({ destination: pickedString })
    this.props.addDestination(destination)
  }

  handleRocket = (rocket) => {
    this.setState({ rocketChoice: rocket.name });
    this.props.addRocketChoice(rocket);
  }

  createDestinations = () => {
    return destinationData.map((destination, index) => {
      let chosen = 'destination-card';
      if (destination.isChosen) {
        chosen = 'chosen-card';
      }
      return (
        <div key={index} className={chosen} onClick={() =>{ this.handleDestination(destination.destination, destination)}}>
          <p className="destination_p">{destination.text}</p>
          <img className="destination_image" src={destination.imageURL} alt="LEO" />
        </div>
      )
    })
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
          {this.createDestinations()}
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
          <h3 className = "rocket-footer_h3">Rocket Choice:  
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