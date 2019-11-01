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

  handleClick = async () => {
    await this.props.setUser(this.state.name)
  }

  checkLogin = () => {
    console.log("here", this.props)
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
        <h1>You are the SPACE FARMER</h1>
        <div className="div_name-input">
          <input 
            name="name" 
            type="text" 
            placeholder="Enter Your Name"
            onChange={this.updateName}
          />
          <button onClick={() => this.handleClick()}>Start Farming!</button>
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