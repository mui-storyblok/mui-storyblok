import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '../MuiButton/MuiButton';
import { validComponents } from '../../utils/customProps';

export const MuiContactButton = ({
  button,
  phone,
  email,
}) => {
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

  return <MuiButton {...muibutton} onClick={onClick} />;
};

export default MuiContactButton;

MuiContactButton.propTypes = {
  /** Telephone number provided to call */
  phone: PropTypes.string,
  /** Email address provided to email to */
  email: PropTypes.string,
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiContactButton.defaultProps = {
  phone: '',
  email: '',
  button: [],
};
