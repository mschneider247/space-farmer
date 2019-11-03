import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addRocketChoice } from '../../actions'

export class Rockets extends Component{
  render() {
    return (
      <>
        <h1>Rockets!</h1>
        <Link to='/overview'><button >Continue</button></Link>
      </>
    )
  }
};

export const mapStateToProps = state => ({
  proposals: state.proposals
});

export const mapDispatchToProps = dispatch => ({
  addRocketChoice: (rocket) => dispatch(addRocketChoice(rocket))
});

export default connect(mapStateToProps, mapDispatchToProps)(Rockets);