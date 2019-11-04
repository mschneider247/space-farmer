import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './ProposalContainer.css';
import { connect } from 'react-redux'
import { addProposal } from '../../actions/index.js'

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
      return (
        <article className="proposal-card">
          <h3>Proposal# {proposal.id}</h3>
          <h3>Final Cost $$ {proposal.finalCost}</h3>
          <h3 className="red-text">PROPOSAL REJECTED</h3>
        </article>
      )
    })

    return (
      <section>
      {console.log("proposals", proposals)}
      {this.checkProposalCreation()}
        <section className="space-background">
          <section className="proposal-container">
            {proposals.length === 0 ? <h3>Start a new proposal below!</h3> : proposals}
          </section>
        </section>
        <section className="section_create">
          <button onClick={(event) => this.handleClick(event)} className="create_btn">Create Proposal</button>
        </section>
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