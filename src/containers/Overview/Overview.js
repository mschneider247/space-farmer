import React from 'react';
import { Link } from 'react-router-dom'

export const Overview = () => {
  return (
    <>
      <h1>Overview</h1>
      <Link path='/proposals'><button >Continue</button></Link>
    </>
  )
};

export default Overview;