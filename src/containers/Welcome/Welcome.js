import React, { Component } from 'react';
import './Welcome.css'
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      noName: undefined,
    }
  }

  updateName = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick = async (event) => {
    if (this.state.name === ''){
      await this.setState({ noName: true })
    } else {
      await this.setState({ noName: false })
    }
    await this.props.setUser(this.state.name)
  }

  checkLogin = () => {
    if (this.props.user !== "") {
      return (
        <Redirect to='/proposals'></Redirect>
      )
    }
  }

  render() {
    let reRoute = this.checkLogin();
    return (
      <div className="div_welcome">
        <h1>You are the SPACE <span className="farmer">FARMER</span></h1>
        <div className="div_name-input">
          <input
            className="name-input" 
            name="name" 
            type="text" 
            placeholder="Enter Your Name"
            onChange={this.updateName}
          />
          <button onClick={(event) => this.handleClick(event)}>Start Farming!</button>
          {this.state.noName ? <p id="no_name_error">Please Enter a Name</p> : null}
        </div>
        {reRoute}
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setUser: userName => dispatch(setUser(userName))
})

export const mapStateToProps = state => ({
  user: state.setUser
})

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)

Welcome.propTypes = {
  name: PropTypes.string,
  user: PropTypes.string,
  setUser: PropTypes.func
}