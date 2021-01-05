import React from 'react';
import PropTypes from 'prop-types';
import Button from 'lib/components/PageGrid/atoms/Button/Button';
import { validComponents } from 'lib/utils/customProps';

export const ContactButton = ({
  button,
  phone,
  email,
}) => {
  const btn = button[0];

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

  return <Button {...btn} onClick={onClick} />;
};

export default ContactButton;

ContactButton.propTypes = {
  /** Telephone number provided to call */
  phone: PropTypes.string,
  /** Email address provided to email to */
  email: PropTypes.string,
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['Button'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

ContactButton.defaultProps = {
  phone: '',
  email: '',
  button: [],
};
