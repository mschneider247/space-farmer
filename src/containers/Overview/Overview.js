import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

export class Overview extends Component{
  render() {
    let currentProposal = this.props.proposals[this.props.proposals.length - 1]
    return (
      <>
        <h3>Overview</h3>
        <p>Proposal# {currentProposal.id}</p>
        <p>Supply Cost: {currentProposal.supplies.supplyCost}</p>
        <p>Supply Weight: {currentProposal.supplies.supplyWeight}</p>
        <p>Destination: {currentProposal.destination}</p>
        <p>Rocket Choice: {currentProposal.rocket.name}</p>
        <Link to='/proposals'><button>Try Again!</button></Link>
      </>
    )
  }
};

export const mapStateToProps = state => ({
  proposals: state.proposals
});

export default connect(mapStateToProps, null)(Overview);