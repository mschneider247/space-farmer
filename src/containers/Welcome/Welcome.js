import React, { Component } from 'react';
import './Welcome.css'
import { setUser } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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

  render() {
    console.log("this.props.setUser", this.props.setUser)
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
          <Link to='/proposals'><button onClick={() => this.handleClick()}>Start Farming!</button></Link>
        </div>
      </div>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  setUser: userName => dispatch(setUser(userName))
})

export default connect(null, mapDispatchToProps)(Welcome)