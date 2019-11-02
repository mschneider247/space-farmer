import React, { Component } from 'react';
import './Welcome.css'
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  updateName = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  handleClick = async (event) => {
    event.stopPropagation();
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
            name="name" 
            type="text" 
            placeholder="Enter Your Name"
            onChange={this.updateName}
          />
          <button onClick={(event) => this.handleClick(event)}>Start Farming!</button>
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