
import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import MuiIconButton from 'lib/components/MuiIconButton/MuiIconButton';

/**
 * MuiIconButtonRedirect is used in storyblok redirect to react routes
 */

export const MuiIconButtonRedirect = ({
  history,
  redirectRoute,
  iconButton,
}) => {
  const onClick = async () => history.push(redirectRoute);

  const muiIconButton = iconButton[0];

  return (
    <MuiIconButton
      {...muiIconButton}
      onClick={onClick}
    />
  );
};

export default withRouter(MuiIconButtonRedirect);

MuiIconButtonRedirect.propTypes = {
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  /** MuiIconButton Allowed maximum: 1 */
  iconButton: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiIconButtonRedirect.defaultProps = {};
