import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';

const MuiButton = lazy(() => import('../MuiButton/MuiButton'));

/**
 * MuiButtonHref takes a href to redirect to
 * more docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonHref = ({
  button,
  herf,
}) => {
  const components = {
    MuiButton,
  };

  const onClick = async () => {
    window.location.assign(herf);
  };

  const muibutton = button[0];

  return (
    <Suspense fallback={<div />}>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick },
        )
        : null
    }
    </Suspense>
  );
};

export default MuiButtonHref;

MuiButtonHref.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** url to redirect to */
  herf: PropTypes.string.isRequired,
};

MuiButtonHref.defaultProps = {};
