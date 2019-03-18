/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description Stateful component for our main display section
 *
 * ************************************
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
// import styles from '../scss/mainContainer.scss';
import * as actions from '../actions/actions';

const mapStateToProps = ({ game }) => {
  return {
    // add pertinent state here
    thing: game.charName,
  };
};

const MainContainer = props => (
  <div className="content">

  </div>
)




export default connect(mapStateToProps)(MainContainer);