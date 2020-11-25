import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSetGeoCode } from 'lib/utils/geoLocate';
import { validComponentsRequired } from 'lib/utils/customProps';
import MobileStepper from 'lib/components/PageGrid/templates/MobileStepper/MobileStepper';

const MuiGeoLocationMobileStepper = ({
  tabs,
  googleApiKey,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [googleKey, setGoogleApiKey] = useState(googleApiKey);

  useEffect(() => {
    setGoogleApiKey(googleApiKey);
  }, [googleApiKey]);

  useSetGeoCode(true, tabs, setActiveStep, googleKey);

  return (<MobileStepper {...tabs[0]} tabIndex={activeStep} />);
};

export default MuiGeoLocationMobileStepper;

MuiGeoLocationMobileStepper.propTypes = {
  /** key for googleApisKey to use geocode */
  googleApiKey: PropTypes.string,
  /** MobileStepper */
  tabs(props, propName, componentName) {
    const components = ['MobileStepper'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

MuiGeoLocationMobileStepper.defaultProps = {
  tabs: [],
  googleApiKey: '',
};
