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

  render() {
    return (
      <section>
        <section>
          <h4>Pick your supplies!</h4>
        </section>
        <section className="tractors">
          <div>
            <p>Tonka Truck</p>
            <img alt="Tonka Truck" />
            <input onClick={() => {this.handleTractor(2, 20)}} type="radio" name="tractor" value="tonka" />
          </div>
          <div>
            <p>Mule</p>
            <img alt="Mule" />
            <input onClick={() => {this.handleTractor(150, 2000)}} type="radio" name="tractor" value="mule" />
          </div>
          <div>
            <p>Combine</p>
            <img alt="Combine" />
            <input onClick={() => {this.handleTractor(150000, 20000)}} type="radio" name="tractor" value="combine" />
          </div>
        </section>
        <section className="dirt">
          <div>
            <p>1 cubic foot of dirt</p>
            <img alt="1 cubic foot of Dirt" />
            <input onClick={() => {this.handleDirt(7, 40)}} type="radio" name="dirt" value="1cuFoot" />
          </div>
          <div>
            <p>1 cubic yard of dirt</p>
            <img alt="1 cubic yard of dirt" />
            <input onClick={() => {this.handleDirt(40, 1080)}} type="radio" name="dirt" value="1cuYard" />
          </div> 
          <div>
            <p>100 cubic yards of dirt</p>
            <img alt="100 cubic yards of dirt" />
            <input onClick={() => {this.handleDirt(3000, 108000)}} type="radio" name="dirt" value="100cuYards" />
          </div>
        </section>
        <Link to='/rockets'><button >Continue</button></Link>
      </section>
    )
  }
};

export default Supplies;