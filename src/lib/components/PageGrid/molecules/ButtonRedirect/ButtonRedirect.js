import React from 'react';
import PropTypes from 'prop-types';
import { validComponents } from 'lib/utils/customProps';
import appRedirect from 'lib/utils/appRedirect';
import Button from '../Button/Button';

/**
 * ButtonRedirect onClick will redirect you to a new route in the current App
 * More docs and demos at https://material-ui.com/api/button/
 * cant redirect in docs
 */

export const ButtonRedirect = ({
  href,
  external,
  button,
  callback,
}) => {
  const externalRedirect = () => {
    window.location.replace(href);
  };

  const internalRedirect = () => {
    appRedirect(href);
  };

  const onClick = () => {
    if (callback) callback();
    if (external) return externalRedirect();
    return internalRedirect();
  };

  const muibutton = button[0];

  return <Button {...muibutton} onClick={onClick} />;
};

export default ButtonRedirect;

ButtonRedirect.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['Button'];
    return validComponents(props, propName, componentName, components, 1);
  },

  /** redirect route */
  href: PropTypes.string.isRequired,

  /**
   * if false will redirect to a page in the app and should use '/page-whatever'
   *
   *  if true will redirect to another site 'https://www.google.com/'
   * */
  external: PropTypes.bool,
  // callback to run before redirect
  callback: PropTypes.func,
};

ButtonRedirect.defaultProps = {
  button: [],
  callback: undefined,
  external: false,
};
