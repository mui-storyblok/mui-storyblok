import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import { validComponentsRequired } from '../../utils/customProps';
import appRedirect from '../../utils/appRedirect';

/**
 * MuiIconButtonRedirect is used in storyblok redirect to react routes
 */

export const MuiIconButtonRedirect = ({
  redirectRoute,
  iconButton,
  callback,
}) => {
  const onClick = () => {
    if (callback) callback();
    appRedirect(redirectRoute);
  };

  const muiIconButton = iconButton[0];

  return (
    <MuiIconButton
      {...muiIconButton}
      onClick={onClick}
    />
  );
};

export default MuiIconButtonRedirect;

MuiIconButtonRedirect.propTypes = {
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
  /** MuiIconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIconButton'], 1);
  },
  callback: PropTypes.func,
};

MuiIconButtonRedirect.defaultProps = {
  iconButton: [],
  callback: undefined,
};
