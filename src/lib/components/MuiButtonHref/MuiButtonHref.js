import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '../MuiButton/MuiButton';
import { validComponents } from '../../utils/customProps';
/**
 * MuiButtonHref takes a href to redirect to
 * more docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonHref = ({
  button,
  href,
}) => {
  const onClick = async () => {
    window.location.assign(href);
  };

  const muibutton = button[0];

  return <MuiButton {...muibutton} onClick={onClick} />;
};

export default MuiButtonHref;

MuiButtonHref.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },

  /** url to redirect to */
  href: PropTypes.string.isRequired,
};

MuiButtonHref.defaultProps = {
  button: [],
};
