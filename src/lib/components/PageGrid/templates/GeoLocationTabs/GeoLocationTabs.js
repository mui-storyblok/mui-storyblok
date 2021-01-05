/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Tabs from 'lib/components/PageGrid/templates/Tabs/Tabs';
import { validComponentsRequired } from 'lib/utils/customProps';
import { useSetGeoCode } from 'lib/utils/geoLocate';

const GeoLocationTabs = ({
  tabs,
  googleApiKey,

}) => {
  const [googleKey, setGoogleApiKey] = useState(googleApiKey);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    setGoogleApiKey(googleApiKey);
  }, [googleApiKey]);

  useSetGeoCode(true, tabs, setTabValue, googleKey);

  return (<Tabs {...tabs[0]} tabIndex={tabValue} />);
};

export default GeoLocationTabs;

GeoLocationTabs.propTypes = {
  /** key for googleApisKey to use geocode */
  googleApiKey: PropTypes.string,

  /** MuiTabs */
  tabs(props, propName, componentName) {
    const components = ['Tabs'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

GeoLocationTabs.defaultProps = {
  tabs: [],
  googleApiKey: '',
};
