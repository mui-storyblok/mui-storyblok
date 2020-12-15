import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
} from 'react-awesome-reveal';

const components = {
  Bounce,
  Fade,
  Flip,
  Hinge,
  JackInTheBox,
  Roll,
  Rotate,
  Slide,
  Zoom,
};

export class Transitions extends Component {
  render() {
    const { transition, children, cascade, direction } = this.props;
    return (
      <>
        { createElement(components[transition], { cascade, direction }, children) }
      </>
    );
  }
}

export default Transitions;

Transitions.propTypes = {
  transition: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
