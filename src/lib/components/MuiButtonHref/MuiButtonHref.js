import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MuiButton from 'lib/components/MuiButton/MuiButton';

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
