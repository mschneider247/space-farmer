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
      <h3>This is the Welcome Container</h3>
    )
  }
  
}