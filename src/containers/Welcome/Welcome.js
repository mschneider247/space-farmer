import React, { Component } from 'react';

export default class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div className="div_welcome">
        <h5>There is a brand new space station somewhere in space... and it needs a farmer.</h5>
        <h5>For some reason, everyone agrees you are The Farmer.</h5>
        <h5>The Farmer is you.</h5>
        <input type="text" placeholder="Enter Your Name"/>
        <button>Start Farming!</button>
      </div>
    )
  }
}