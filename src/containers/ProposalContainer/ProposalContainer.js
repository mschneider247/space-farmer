import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './ProposalContainer.css';
import { connect } from 'react-redux';
import { addProposal } from '../../actions/index.js';
import PropTypes from 'prop-types';
import spacePig from '../../images/spacePig.png';
import numFormater from '../../helper/helper'

export class ProposalContainer extends Component {
  constructor() {
    super();
    this.state = {
      newProposal: false,
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    this.setState({newProposal: true})
    let proposal = {
      key: this.props.proposals.length + 1,
      id: this.props.proposals.length + 1,
    }
    this.props.addProposal(proposal)
  }

  checkProposalCreation = () => {
    if (this.state.newProposal === true) {
      return ( 
        <Redirect to='/supplies'></Redirect>
      )
    }
  }

  render() {
    const proposals = this.props.proposals.map(proposal => {
      let cost;
      if (proposal.finalCost) {
        cost = numFormater(proposal.finalCost)
      }
      return (
        <article className="proposal-card" key={proposal.id}>
          <h3>Proposal# {proposal.id}</h3>
          <h3>Final Cost 
            <span className="symbols">$$ </span> 
            {cost}
          </h3>
          <h3 className="red-text">PROPOSAL REJECTED</h3>
        </article>
      )
    });

    const createProposal = (
        <section className="section_create">
          <button onClick={(event) => this.handleClick(event)} className="create_btn">Create Proposal</button>
        </section>
    )

    return (
      <section>
      {this.checkProposalCreation()}
        <section className="proposal-container">
          {proposals.length === 0 ? <div><h3 id="prompt">Start a new proposal! </h3>{createProposal}</div> : proposals}
        </section>
        <section className="space-background">
          <img id="space_pig" src={spacePig} alt="Pig in Space"/>
        </section>
          <div id="extra_create_btn">
            {proposals.length === 0 ? null : createProposal}
          </div>
      </section>
    )
  }
}

export const mapStateToProps = state => ({
  proposals: state.proposals
})

export const mapDispatchToProps = dispatch => ({
  addProposal: proposal => dispatch(addProposal(proposal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProposalContainer);

ProposalContainer.propTypes = {
  proposals: PropTypes.array,
  addProposal: PropTypes.func,
  newProposal: PropTypes.bool
}