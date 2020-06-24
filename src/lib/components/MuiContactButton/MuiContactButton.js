import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MuiButton from '../MuiButton/MuiButton';

export const MuiContactButton = ({
  button,
  phone,
  email,
}) => {
  const components = {
    MuiButton,
  };

  const muibutton = button[0];

  const onClick = () => {
    const tempLink = document.createElement('a');
    if (phone) {
      tempLink.href = `tel: ${+phone}`;
    } else if (email) {
      tempLink.href = `mailto: ${email}`;
    }
    tempLink.click();
    tempLink.remove();
  };

  return (
    <>
      {
        muibutton && createElement(
          components[muibutton.component],
          { ...muibutton, onClick },
        )
      }
    </>
  );
};

export default MuiContactButton;

MuiContactButton.propTypes = {
  /** Telephone number provided to call */
  phone: PropTypes.string,
  /** Email address provided to email to */
  email: PropTypes.string,
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiContactButton.defaultProps = {
  phone: '',
  email: '',
};
