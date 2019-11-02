import React from 'react';
import { Link } from 'react-router-dom'

export const Rockets = () => {
  return (
    <>
      <h1>Rockets!</h1>
      <Link to='/overview'><button >Continue</button></Link>
    </>
  )
};

export default Rockets;