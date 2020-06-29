import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '../MuiButton/MuiButton';
import { validComponents } from '../../utils/customProps';
import appRedirect from '../../utils/appRedirect';

/**
 * MuiButtonRedirect onClick will redirect you to a new route in the current App
 * More docs and demos at https://material-ui.com/api/button/
 * cant redirect in docs
 */

export const MuiButtonRedirect = ({
  redirectRoute,
  button,
}) => {
  const onClick = () => appRedirect(redirectRoute);

  const muibutton = button[0];

  return <MuiButton {...muibutton} onClick={onClick} />;
};

export default MuiButtonRedirect;

MuiButtonRedirect.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },

  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
};

MuiButtonRedirect.defaultProps = {
  button: [],
};
