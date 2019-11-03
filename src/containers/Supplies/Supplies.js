import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Supplies extends Component {
  render() {
    return (
      <>
        <h1>Supplies</h1>
        <Link to='/rockets'><button >Continue</button></Link>
      </>
    )
  }
};

export default Supplies;