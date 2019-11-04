import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Supplies.css';
import { addSupplies } from '../../actions'
import tonka from '../../images/tonka.jpg';
import mule from '../../images/mule.jpg';
import combine from '../../images/combine.jpg';
import hoe from '../../images/hoe.jpg';
import gardentools from '../../images/gardentools.jpg';
import hal9000 from '../../images/hal9000.jpg'
import dirt from '../../images/dirt.jpg';
import moredirt from '../../images/moredirt.jpg';
import mostdirt from '../../images/mostdirt.jpg';
import carrots from '../../images/carrots.jpg';
import variety from '../../images/variety.jpg';
import exotic from '../../images/exotic.jpg';

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
    this.setState({tractorCost: cost});
    this.setState({tractorWeight: weight});
  }

  handleDirt = (cost, weight) => {
    this.setState({dirtCost: cost});
    this.setState({dirtWeight: weight});
  }

  handleHoe = (cost, weight) => {
    this.setState({hoeCost: cost});
    this.setState({hoeWeight: weight});
  }

  handleSeed = (cost, weight) => {
    this.setState({seedCost: cost});
    this.setState({seedWeight: weight});
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
            <div className="supply-card">
              <p>Mule, $150</p>
              <p>200 lbs</p>
              <img src={mule} alt="Mule" />
              <input className="supplies_input" onClick={() => {this.handleTractor(150, 200)}} type="radio" name="tractor" value="mule" />
            </div>
            <div className="supply-card">
              <p>Combine, $420,000</p>
              <p>36,000 lbs</p>
              <img src={combine} alt="Combine" />
              <input className="supplies_input" onClick={() => {this.handleTractor(420000, 36000)}} type="radio" name="tractor" value="combine" />
            </div>
          </section>
          <section className="dirt">
            <div className="supply-card">
              <p>1 cubic foot of dirt, $7</p>
              <p>40 lbs</p>
              <img src={dirt} alt="1 cubic foot of Dirt" />
              <input className="supplies_input" onClick={() => {this.handleDirt(7, 40)}} type="radio" name="dirt" value="1cuFoot" />
            </div>
            <div className="supply-card">
              <p>1 cubic yard of dirt, $40</p>
              <p>1,080 lbs</p>
              <img src={moredirt} alt="1 cubic yard of dirt" />
              <input className="supplies_input" onClick={() => {this.handleDirt(40, 1080)}} type="radio" name="dirt" value="1cuYard" />
            </div> 
            <div className="supply-card">
              <p>100 cubic yards dirt, $3000</p>
              <p>108,000 lbs</p>
              <img src={mostdirt} alt="100 cubic yards of dirt" />
              <input className="supplies_input" onClick={() => {this.handleDirt(3000, 108000)}} type="radio" name="dirt" value="100cuYards" />
            </div>
          </section>
          <section className="hoes">
            <div className="supply-card">
              <p>Basic hoe, 6$</p>
              <p>3 lbs</p>
              <img src={hoe} alt="1 basic hoe" />
              <input className="supplies_input" onClick={() => {this.handleHoe(6, 3)}} type="radio" name="hoes" value="basicHoe" />
            </div>
            <div className="supply-card">
              <p>Garden tools, $35</p>
              <p>20 lbs</p>
              <img src={gardentools} alt="Garden Tools" />
              <input className="supplies_input" onClick={() => {this.handleHoe(35, 20)}} type="radio" name="hoes" value="gardenTools" />
            </div> 
            <div className="supply-card">
              <p>Hal 9000, $97,000</p>
              <p>16 lbs</p>
              <img src={hal9000} alt="Hal 9000" />
              <input className="supplies_input" onClick={() => {this.handleHoe(97000, 16)}} type="radio" name="hoes" value="Hal 9000" />
            </div>
          </section>
          <section className="seeds">
            <div className="supply-card">
              <p>Carrots, $1</p>
              <p>0.5 lbs</p>
              <img src={carrots} alt="carrots" />
              <input className="supplies_input" onClick={() => {this.handleSeed(1, 0.5)}} type="radio" name="seeds" value="carrots" />
            </div>
            <div className="supply-card">
              <p>Fruit and Veggie variety, $10</p>
              <p>4 lbs</p>
              <img src={variety} alt="Fruits and Veggies Pack" />
              <input className="supplies_input" onClick={() => {this.handleSeed(10, 4)}} type="radio" name="seeds" value="fruitAndVeggieVariety" />
            </div> 
            <div className="supply-card">
              <p>Exotics, $110</p>
              <p>9 lbs</p>
              <img src={exotic} alt="Exotic Seeds" />
              <input className="supplies_input" onClick={() => {this.handleSeed(110, 9)}} type="radio" name="seeds" value="exoticSeeds" />
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

export const mapDispatchtoProps = dispatch => ({
  addSupplies: (supplies) => dispatch(addSupplies(supplies))
})

export default connect(null, mapDispatchtoProps)(Supplies);