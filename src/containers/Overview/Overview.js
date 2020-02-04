import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Overview.css';
import { addProposalFinalCost } from '../../actions';
import PropTypes from 'prop-types';
import numFormater from '../../helper/helper'

export class Overview extends Component{

  numberOfRockets = (currentProposal) => {
    let currentRocketPayload = currentProposal.rocket.payloads.find(payload => payload.id === currentProposal.destination).lb
    return Math.ceil(currentProposal.supplies.supplyWeight / currentRocketPayload)
  }

  updateProposal = (totalCost) => {
    this.props.addProposalFinalCost(totalCost)
  }

  render() {
    let currentProposal = this.props.proposals[this.props.proposals.length - 1]
    let numberOfLaunches = this.numberOfRockets(currentProposal)
    let supplyCost = numFormater(currentProposal.supplies.supplyCost)
    let launchCost = numFormater(numberOfLaunches * currentProposal.rocket.cost)
    let totalCost = (numberOfLaunches * currentProposal.rocket.cost) + currentProposal.supplies.supplyCost
    let printTotalCost = numFormater(totalCost)

    return (
      <section className="overview-box">
        <h3>Overview</h3>
        <p>Proposal# {currentProposal.id}</p>
        <p>Supply Cost: <span className="symbols">$</span>
          {supplyCost}
        </p>
        <p>Supply Weight: {currentProposal.supplies.supplyWeight}
          <span className="symbols">lbs</span>
        </p>
        <p>Destination: {currentProposal.destination}</p>
        <p>Rocket Choice: {currentProposal.rocket.name}</p>
        <br></br>
        <p>Your payload of {currentProposal.supplies.supplyWeight}lbs will take</p>
        <p>{numberOfLaunches} launches of {currentProposal.rocket.name}</p>
        <br></br>
        <p>{numberOfLaunches} {currentProposal.rocket.name} will cost</p>
        <p>$ {launchCost}</p>
        <br></br>
        <p>For a total cost of $$ {printTotalCost}</p>
        <h3 className="red-text">PROPOSAL: REJECTED</h3>
        <Link to='/proposals'><button onClick={() => this.updateProposal(totalCost)}>Try Again!</button></Link>
      </section>
    )
  }
};

export const mapStateToProps = state => ({
  proposals: state.proposals
});

export const mapDispatchToProps = dispatch => ({
  addProposalFinalCost: finalCost => dispatch(addProposalFinalCost(finalCost))
})

export default connect(mapStateToProps, mapDispatchToProps)(Overview);

Overview.propTypes = {
  proposals: PropTypes.array,
  addProposalFinalCost: PropTypes.func
}