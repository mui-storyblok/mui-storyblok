import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';


export default class Wrapper extends Component {
  render() {
    return (
        <BrowserRouter>
          <Route>
            {this.props.children}
          </Route>
        </BrowserRouter>
    );
  }
}
