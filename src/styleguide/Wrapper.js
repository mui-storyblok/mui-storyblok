import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';


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
      <BrowserRouter>
        <Route>
          {this.props.children}
        </Route>
      </BrowserRouter>
    );
  }
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
