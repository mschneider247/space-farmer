import React from 'react';
import { Link } from 'react-router-dom'

export const Supplies = () => {
  return (
    <>
      <h1>Supplies</h1>
      <Link to='/rockets'><button >Continue</button></Link>
    </>
  )
};

export default Supplies;