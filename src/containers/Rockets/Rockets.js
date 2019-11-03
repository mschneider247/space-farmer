import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Rockets extends Component{
  render() {
    return (
      <>
        <h1>Rockets!</h1>
        <Link to='/overview'><button >Continue</button></Link>
      </>
    )
  }
};

export default Rockets;