import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MuiButton from '../MuiButton/MuiButton';
import { validComponents } from '../../utils/customProps';

/**
 * MuiButtonRedirect onClick will redirect you to a new route in the current App
 * More docs and demos at https://material-ui.com/api/button/
 * cant redirect in docs
 */

export const MuiButtonRedirect = ({
  history,
  redirectRoute,
  button,
}) => {
  const onClick = async () => history.push(redirectRoute);

  const muibutton = button[0];

  return <MuiButton {...muibutton} onClick={onClick} />;
};

export default withRouter(MuiButtonRedirect);

MuiButtonRedirect.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },

  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiButtonRedirect.defaultProps = {
  button: [],
};
