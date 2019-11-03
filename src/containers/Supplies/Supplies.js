import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Supplies.css';

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
      seedWeight: 0
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
              <p>Tonka Truck</p>
              <img alt="Tonka Truck" />
              <input onClick={() => {this.handleTractor(20, 2)}} type="radio" name="tractor" value="tonka" />
            </div>
            <div className="supply-card">
              <p>Mule</p>
              <img alt="Mule" />
              <input onClick={() => {this.handleTractor(150, 200)}} type="radio" name="tractor" value="mule" />
            </div>
            <div className="supply-card">
              <p>Combine</p>
              <img alt="Combine" />
              <input onClick={() => {this.handleTractor(420000, 36000)}} type="radio" name="tractor" value="combine" />
            </div>
          </section>
          <section className="dirt">
            <div className="supply-card">
              <p>1 cubic foot of dirt</p>
              <img alt="1 cubic foot of Dirt" />
              <input onClick={() => {this.handleDirt(7, 40)}} type="radio" name="dirt" value="1cuFoot" />
            </div>
            <div className="supply-card">
              <p>1 cubic yard of dirt</p>
              <img alt="1 cubic yard of dirt" />
              <input onClick={() => {this.handleDirt(40, 1080)}} type="radio" name="dirt" value="1cuYard" />
            </div> 
            <div className="supply-card">
              <p>100 cubic yards of dirt</p>
              <img alt="100 cubic yards of dirt" />
              <input onClick={() => {this.handleDirt(3000, 108000)}} type="radio" name="dirt" value="100cuYards" />
            </div>
          </section>
          <section className="hoes">
            <div className="supply-card">
              <p>Basic hoe</p>
              <img alt="1 basic hoe" />
              <input onClick={() => {this.handleHoe(4, 15)}} type="radio" name="hoes" value="basicHoe" />
            </div>
            <div className="supply-card">
              <p>Hoe 3 pack</p>
              <img alt="Hoe three pack" />
              <input onClick={() => {this.handleHoe(10, 45)}} type="radio" name="hoes" value="hoe3Pack" />
            </div> 
            <div className="supply-card">
              <p>Super hoe 9000</p>
              <img alt="Super Hoe 9000" />
              <input onClick={() => {this.handleHoe(3000, 12)}} type="radio" name="hoes" value="superHoe9000" />
            </div>
          </section>
          <section className="seeds">
            <div className="supply-card">
              <p>Carrot seeds</p>
              <img alt="carrots" />
              <input onClick={() => {this.handleSeed(1, 0.5)}} type="radio" name="seeds" value="carrots" />
            </div>
            <div className="supply-card">
              <p>Mixed Fruits and Veggies seed pack</p>
              <img alt="Fruits and Veggies Pack" />
              <input onClick={() => {this.handleSeed(10, 1)}} type="radio" name="seeds" value="fruiteAndVeggiesPack" />
            </div> 
            <div className="supply-card">
              <p>Exotic seeds</p>
              <img alt="Exotic Seeds" />
              <input onClick={() => {this.handleSeed(100, 2)}} type="radio" name="seeds" value="exoticSeeds" />
            </div>
          </section>
        </section>
          <div className="supply-footer">
            <div>
              <p>Total Cost: <span className="symbols">$</span> {totalCost}</p>
              <p>Total Weight: {totalWeight} <span className="symbols">lbs</span></p>
            </div>
            <div>
              <Link to='/rockets'><button className="supply-btn">Continue</button></Link>
            </div>
          </div>
      </section>
    )
  }
};

export default Supplies;