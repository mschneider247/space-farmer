import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Supplies.css';
import PropTypes from 'prop-types';
import { addSupplies } from '../../actions';
import tonka from '../../images/tonka.jpg';
import mule from '../../images/mule.jpg';
import combine from '../../images/combine.jpg';
import hoe from '../../images/hoe.jpg';
import gardentools from '../../images/gardentools.jpg';
import hal9000 from '../../images/hal9000.jpg';
import dirt from '../../images/dirt.jpg';
import moredirt from '../../images/moredirt.jpg';
import mostdirt from '../../images/mostdirt.jpg';
import carrots from '../../images/carrots.jpg';
import variety from '../../images/variety.jpg';
import exotic from '../../images/exotic.jpg';
import supplyData from './supplyData';

export class Supplies extends Component {
  constructor() {
    super();
    this.state = {
      tractorCost: 0,
      tractorWeight: 0,
      dirtCost: 0,
      dirtWeight: 0,
      hoeCost: 0,
      hoeWeight: 0,
      seedCost: 0,
      seedWeight: 0,
    }
  }

  handleTractor = (cost, weight) => {
    this.setState({ tractorCost: cost });
    this.setState({ tractorWeight: weight });
  }

  handleDirt = (cost, weight) => {
    this.setState({ dirtCost: cost });
    this.setState({ dirtWeight: weight });
  }

  handleHoe = (cost, weight) => {
    this.setState({ hoeCost: cost });
    this.setState({ hoeWeight: weight });
  }

  handleSeed = (cost, weight) => {
    this.setState({ seedCost: cost });
    this.setState({ seedWeight: weight });
  }

  handleSubmit = () => {
    let totalCost = this.state.tractorCost + this.state.dirtCost + this.state.hoeCost + this.state.seedCost;
    let totalWeight = this.state.tractorWeight + this.state.dirtWeight + this.state.hoeWeight + this.state.seedWeight;
    this.props.addSupplies({supplyCost: totalCost, supplyWeight: totalWeight})
  }

  render() {
    let totalCost = this.state.tractorCost + this.state.dirtCost + this.state.hoeCost + this.state.seedCost;
    let totalWeight = this.state.tractorWeight + this.state.dirtWeight + this.state.hoeWeight + this.state.seedWeight;

    return (
      <section>
        <section>
          <h4>Pick your supplies!</h4>
        </section>
        <section className="supplies">
          <section className="tractors">
            <div className="supply-card">
              <p>Tonka Truck, $20</p>
              <p>2 lbs</p>
              <img src={tonka} alt="Tonka Truck" />
              <input className="supplies_input" onClick={() => {this.handleTractor(20, 2)}} type="radio" name="tractor" value="tonka" />
            </div>
          </section>
        </section>
          <div className="supply-footer">
            <div className="footer-text">
              <p id="totalcost">Total Cost: <span className="symbols">$</span> {totalCost}</p>
              <p id="totalweight">Total Weight: {totalWeight} <span className="symbols">lbs</span></p>
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