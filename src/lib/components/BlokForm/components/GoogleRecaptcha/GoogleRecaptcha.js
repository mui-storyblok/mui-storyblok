import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

const GoogleRecaptcha = ({ siteKey, setIsABot }) => {
  const onChange = () => {
    if (siteKey) setIsABot({ setIsABot: false });
  };

  return (
    <ReCAPTCHA
      sitekey={siteKey}
      onChange={onChange}
    />
  );
};

export default GoogleRecaptcha;

GoogleRecaptcha.propTypes = {
  siteKey: PropTypes.string.isRequired,
  setIsABot: PropTypes.func.isRequired,
};

GoogleRecaptcha.defaultProps = {};
