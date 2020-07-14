import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MuiButtonDownload from '../MuiButtonDownload/MuiButtonDownload';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiIconButtonDownload from '../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import { validComponentsRequired } from '../../utils/customProps';


const GoogleConversions = ({ sendTo, aWConversionID, button }) => {
  if (!window.awConversionId) {
    window.aWConversionID = aWConversionID;
  }

  const components = {
    MuiButtonDownload,
    MuiButtonHref,
    MuiButtonRedirect,
    MuiIconButtonDownload,
    MuiIconButtonHref,
    MuiIconButtonRedirect,
  };

  const conversionCall = () => {
    const callback = () => { console.log('Conversion Call back called: ', sendTo); };
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      event_callback: callback,
    });
    return false;
  };

  return (
    <>
      { createElement(components[button[0].component], { ...button[0], callback: conversionCall }) }
    </>
  );
};

export default GoogleConversions;

GoogleConversions.propTypes = {
  sendTo: PropTypes.string.isRequired,
  aWConversionID: PropTypes.string.isRequired,
  button(props, propName, componentName) {
    const validComponents = [
      MuiButtonDownload,
      MuiButtonHref,
      MuiButtonRedirect,
      MuiIconButtonDownload,
      MuiIconButtonHref,
      MuiIconButtonRedirect];
    return validComponentsRequired(props, propName, componentName, validComponents, 1);
  },
};

GoogleConversions.defaultProps = {
  button: [],
};
