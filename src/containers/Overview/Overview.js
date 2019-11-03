import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Overview extends Component{
  render() {
    return (
      <>
        <h1>Overview</h1>
        <Link to='/proposals'><button >Continue</button></Link>
      </>
    )
  }
};

export default Overview;