import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Supplies.css';
import PropTypes from 'prop-types';
import { addSupplies } from '../../actions';
import supplyData from './supplyData';

export class Supplies extends Component {
  constructor() {
    super();
    this.state = {
      supplyCost: 0,
      supplyWeight: 0,
    };
  }

  handleSubmit = () => {
    this.props.addSupplies({ supplyCost: this.state.supplyCost, supplyWeight: this.state.supplyWeight });
  }

  render() {

    const supplies = supplyData.map(supply => {
      return (
        <div className="supply-card" key={supply.id}>
          <p>{supply.name}</p>
          <p>$ {supply.cost}</p>
          <p>{supply.weight} lbs</p>
          <img src={supply.imageURL} alt={supply.name}/>
        </div>
      )
    })

    return (
      <section>
        <section>
          <h4>Pick your supplies!</h4>
        </section>
        <section className="supplies">
          {supplies}
        </section>
          <div className="supply-footer">
            <div className="footer-text">
              <p id="totalcost">Total Cost: <span className="symbols">$</span> {this.state.supplyCost}</p>
              <p id="totalweight">Total Weight: {this.state.supplyWeight} <span className="symbols">lbs</span></p>
            </div>
            <div className="footer-btn">
              <Link to='/rockets'><button onClick={this.handleSubmit} className="supply-btn">Continue to Rockets!</button></Link>
            </div>
          </div>
      </section>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  addSupplies: (supplies) => dispatch(addSupplies(supplies))
})

export default connect(null, mapDispatchToProps)(Supplies);

Supplies.propTypes = {
  addSupplies: PropTypes.func,
  tractorCost: PropTypes.number,
  tractorWeight: PropTypes.number,
  dirtCost: PropTypes.number,
  dirtWeight: PropTypes.number,
  hoeCost: PropTypes.number,
  hoeWeight: PropTypes.number,
  seedCost: PropTypes.number,
  seedWeight: PropTypes.number,
}