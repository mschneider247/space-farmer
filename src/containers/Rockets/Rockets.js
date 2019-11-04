import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addRocketChoice } from '../../actions'
import { addDestination } from '../../actions'
import './Rockets.css'

export class Rockets extends Component{

  handleDestination = destination => {
    this.props.addDestination(destination)
  }

  render() {
    return (
      <>
        <h3>Where do you want to go?</h3>
        <section className="destinations">
           <div className="destination-card">
            <p>Low Earth Orbit</p>
            <img alt="LEO" />
            <input className="destination_input" onClick={() =>{this.handleDestination("LEO")}} type="radio" name="destination" value="LEO" />
          </div>
          <div className="destination-card">
            <p>Geostationary Transfer Orbit</p>
            <img alt="GTO" />
            <input className="destination_input" onClick={() =>{this.handleDestination("GTO")}} type="radio" name="destination" value="LEO" />
          </div>
          <div className="destination-card">
            <p>Moon</p>
            <img alt="Moon" />
            <input className="destination_input" onClick={() =>{this.handleDestination("Moon")}} type="radio" name="destination" value="Moon" />
          </div>
          <div className="destination-card">
            <p>Mars</p>
            <img alt="Mars" />
            <input className="destination_input" onClick={() =>{this.handleDestination("Mars")}} type="radio" name="destination" value="Mars" />
          </div>
        </section>
        <Link to='/overview'><button >Continue</button></Link>
      </>
    )
  }
};

export const mapStateToProps = state => ({
  proposals: state.proposals
});

export const mapDispatchToProps = dispatch => ({
  addDestination: (destination) => dispatch(addDestination(destination)),
  addRocketChoice: (rocket) => dispatch(addRocketChoice(rocket))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);