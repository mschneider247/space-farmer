import React, { Component } from 'react';
import './Welcome.css'

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  updateName = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="div_welcome">
        <h5>There is a brand new space station somewhere in space... and it needs a farmer.</h5>
        <h5>For some reason, everyone agrees you are The Farmer.</h5>
        <h5>The Farmer is you.</h5>
        <div className="div_name-input">
          <input 
            name="name" 
            type="text" 
            placeholder="Enter Your Name"
            onChange={this.updateName}
          />
          <button>Start Farming!</button>
        </div>
      </div>
    )
  }
}