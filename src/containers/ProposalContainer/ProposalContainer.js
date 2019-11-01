import React from 'react';
import './ProposalContainer.css';

export const ProposalContainer = () => {
  return (
    <section>
      <section className="space-background">
        {/* <article>
          <h5>Proposal 1</h5>
        </article>
        <article>
          <h5>Proposal 2</h5>
        </article> */}
      </section>
      <section className="section_create">
        <button className="create_btn">Create Proposal</button>
      </section>
    </section>
  )
}

export default ProposalContainer;