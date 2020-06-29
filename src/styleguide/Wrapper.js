import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Wrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <h1> </h1>
      );
    }

    return (
      <>
        {this.props.children}
      </>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
