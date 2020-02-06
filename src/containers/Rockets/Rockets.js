import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addRocketChoice, addDestination } from '../../actions';
import './Rockets.css';
import destinationData from './destinationData';
import rocketData from './rocketData';
import numFormater from '../../helper/helper';

export class Rockets extends Component {
  constructor() {
    super();
    this.state = {
      destination: '',
      distance: '',
      rocketChoice: '',
      cost: '',
    };
  }

  handleDestination = (destination, picked) => {
    this.clearChoices();
    picked.isChosen = true;
    let pickedString = ' ' + picked.text
    this.setState({ destination: pickedString })
    this.setState({ distance: picked.distance })
    this.props.addDestination(destination)
  }

  handleRocket = async (rocket) => {
    rocketData.forEach(rocket => {
      rocket.isChosen = false;
    });
    rocket.isChosen = true;
    this.setState({ rocketChoice: rocket.name });
    this.setState({ cost: rocket.cost});
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
      let chosen = 'rocket-card';
      if (rocket.isChosen) {
        console.log("ROCket CHosen!!")
        chosen = 'chosen-rocket';
      }
      let cost = numFormater(rocket.cost)
      console.log("className is :: ", chosen)
      return (
        <div className={chosen} key={rocket.id} onClick={() =>{this.handleRocket(rocket)}}>
          <img className="rocket_image" src={rocket.image} alt={rocket.name}/>
          <p>{rocket.name}</p>
          <p><span className="symbols">$ </span>{cost}</p>
        </div>
      )
    })
  }

  getAvailableRockets = () => {
    let currentDestination = this.props.proposals[this.props.proposals.length - 1].destination;
    let availableRockets = [];
    rocketData.forEach(rocket => {
      rocket.payloads.forEach(payload => {
        if (payload.id === currentDestination) {
          availableRockets.push(rocket);
        };
      });
    });
    let mappedRockets = this.createRockets(availableRockets);
    return mappedRockets
  }

  clearChoices = () => {
    destinationData.forEach(destination => {
      destination.isChosen = false;
    });
    rocketData.forEach(rocket => {
      rocket.isChosen = false;
    });
  }

  render() {
    let avgDistance = numFormater(this.state.distance);

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
          {(this.state.destination !== '') ?
            <div>
              <h3 className="rocket-footer_h3">Destination:
                {this.state.destination}
              </h3>
              <h3 className="rocket-footer_h3">Average Distance: {" " + avgDistance} <span className="symbols"> miles</span>
              </h3>
            </div> 
          : null}
          {(this.state.rocketChoice !== '') ?
            <div>
              <h3 className = "rocket-footer_h3">Rocket Choice:
                {" " + this.state.rocketChoice}
              </h3>
            </div>
          : null}
          {(this.state.destination !== '' && this.state.rocketChoice !== '') ? <Link to='/overview'><button onClick={this.clearChoices}>Continue To Overview</button></Link> : null}
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