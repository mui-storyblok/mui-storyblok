import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import { validComponentsRequired } from '../../utils/customProps';

/**
 * MuiIconButtonHref is used in storyblok redirect to react routes
 */

export const MuiIconButtonHref = ({
  iconButton,
  href,
}) => {
  const onClick = () => {
    window.location.assign(href);
  };

  const muiIconButton = iconButton[0];

  return (
    <MuiIconButton
      {...muiIconButton}
      onClick={onClick}
    />
  );
};

export default MuiIconButtonHref;

MuiIconButtonHref.propTypes = {
  /** url to redirect to */
  href: PropTypes.string.isRequired,
  /** MuiIconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIconButton'], 1);
  },
};

MuiIconButtonHref.defaultProps = {
  iconButton: [],
};
