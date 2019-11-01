import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const Nav = (props) => {
  console.log("props", props)
  return (
    <nav>
      <h1>SPACE FARMER</h1>
      <div>
        <p>Welcome! {props.user}</p>
        <Link to='/'><button>Log Out</button></Link>
      </div>
    </nav>
  )
}

export const mapStateToProps = state => ({
  user: state.setUser
})

export default connect(mapStateToProps, null)(Nav);