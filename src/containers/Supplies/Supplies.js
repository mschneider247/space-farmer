import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Supplies.css';
import PropTypes from 'prop-types';
import { addSupplies } from '../../actions';
import supplyData from './supplyData';
import numFormater from '../../helper/helper';

export class Supplies extends Component {
  constructor() {
    super();
    this.state = {
      supplies: supplyData,
      supplyCost: 0,
      supplyWeight: 0,
    };
  }

  handleSubmit = () => {
    this.props.addSupplies({ supplyCost: this.state.supplyCost, supplyWeight: this.state.supplyWeight });
    const clearSupplies = this.state.supplies.map(supply => supply.isChosen = false);
    this.setState({ supplies: clearSupplies });
  }

  addOrRemoveSupplyCostandWeight = (supply) => {
    let cost, weight;
    if (supply.isChosen) {
      cost = this.state.supplyCost + supply.cost;
      weight = this.state.supplyWeight + supply.weight;
    } else {
      cost = this.state.supplyCost - supply.cost;
      weight = this.state.supplyWeight - supply.weight;
    }
    this.setState({ supplyCost: cost });
    this.setState({ supplyWeight: weight });
  };

  handleSupplies = (id) => {
    const mappedSupplies = this.state.supplies.map(supply => {
      if (supply.id === id) {
        supply.isChosen = !supply.isChosen;
        this.addOrRemoveSupplyCostandWeight(supply);
      }
      return supply;
    });
    this.setState({ supplies : mappedSupplies });
  }

  render() {
    const supplies = this.state.supplies.map((supply) => {
      let chosen = 'supply-card';
      if (supply.isChosen) {
        chosen = 'chosen';
      }
      return (
        <div className={chosen} key={supply.id} onClick={() => this.handleSupplies(supply.id)}>
          <p>{supply.name}</p>
          <p>
            <span className="symbols"> $ </span>
            {numFormater(supply.cost)}
          </p>
          <p>
            {numFormater(supply.weight)}
            <span className="symbols"> lbs</span>
          </p>
          <img className="supply_card_image" src={supply.imageURL} alt={supply.name}/>
        </div>
      )
    });

    let totalWeight = numFormater(this.state.supplyWeight);
    let totalCost = numFormater(this.state.supplyCost);

    return (
      <section>
        <section>
          <h2 id="pick_supplies">Pick your supplies!</h2>
        </section>
        <section className="supplies">
          {supplies}
        </section>
        <div className="supply-footer">
          <div className="footer-text">
            <p id="totalcost">
              Total Cost: <span className="symbols">$</span> {totalCost}</p>
            <p id="totalweight">
              Total Weight: {totalWeight} 
              <span className="symbols"> lbs</span>
            </p>
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