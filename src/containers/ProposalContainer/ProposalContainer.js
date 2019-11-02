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
    return (
      <section>
      {console.log(this.state.newProposal)}
      {this.checkProposalCreation()}
        <section className="space-background">
          {/* <article>
            <h5>Proposal 1</h5>
          </article>
          <article>
            <h5>Proposal 2</h5>
          </article> */}
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