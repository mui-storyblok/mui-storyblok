import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MuiButton from 'lib/components/MuiButton/MuiButton';

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
  const components = {
    MuiButton,
  };

  const onClick = async () => {
    return history.push(redirectRoute);
  };

  const muibutton = button[0];

  return (
    <>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick },
        )
        : null
    }
    </>
  );
};

export default withRouter(MuiButtonRedirect);

MuiButtonRedirect.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiButtonRedirect.defaultProps = {};
