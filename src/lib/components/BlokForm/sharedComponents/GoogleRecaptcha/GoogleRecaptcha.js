import React from 'react';
import PropTypes from 'prop-types';
import ReCAPTCHA from 'react-google-recaptcha';

const GoogleRecaptcha = ({ siteKey, setIsABot }) => {
  const onChange = (value) => {
    console.log('Captcha value: ', value);
    setIsABot(false);
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
  siteKey: PropTypes.string,
  setIsABot: PropTypes.func.isRequired,
};

GoogleRecaptcha.defaultProps = {
  siteKey: '6Ld7hqQUAAAAABoLlL1_koUcFSSLMGYUTOSe4iMQ',
};
