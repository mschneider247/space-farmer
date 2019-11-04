import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setUser } from '../../actions';
import './Nav.css';
import PropTypes from 'prop-types';

export const Nav = (props) => {
  const handleClick = () => {
    props.setUser('')
  }

  const checkLogin = () => {
    if (props.user === ""){
      return (
        <Redirect to='/'></Redirect>
      )
    }
  }

  return (
    <nav>
      {checkLogin()}
      <h1>SPACE <span className="farmer">FARMER</span></h1>
      <div className="div_welcome-logout">
        <p>Welcome! {props.user}</p>
        <button className="nav_logout-btn" onClick={() => handleClick()}>Log Out</button>
      </div>
    </nav>
  )
}

export const mapStateToProps = state => ({
  user: state.setUser
})

export const mapDispatchToProps = dispatch => ({
  setUser: userName => dispatch(setUser(userName))
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

Nav.propTypes = {
  user: PropTypes.string,
  setUser: PropTypes.func
}