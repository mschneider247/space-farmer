import React from 'react';
import { Link } from 'react-router-dom'
import './ProposalContainer.css';
import { connect } from 'react-redux'
import { addProposal } from '../../actions/index.js'

export const ProposalContainer = (props) => {

  const handleClick = () => {
    console.log("Create Proposal clicked!")
    let proposal = {
      id: props.proposals.length + 1,
      title: "Holly shit a priposal!!"
    }
    props.addProposal(proposal)
  }

  return (
    <section>
      {/* {checkSupplies()} */}
      <section className="space-background">
        {/* <article>
          <h5>Proposal 1</h5>
        </article>
        <article>
          <h5>Proposal 2</h5>
        </article> */}
      </section>
      <section className="section_create">
        <button onClick={handleClick} className="create_btn">Create Proposal</button>
      </section>
    </section>
  )
}

export const mapStateToProps = state => ({
  proposals: state.proposals
})

export const mapDispatchToProps = dispatch => ({
  addProposal: proposal => dispatch(addProposal(proposal))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProposalContainer);