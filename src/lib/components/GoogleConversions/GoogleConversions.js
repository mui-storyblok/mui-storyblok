import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MuiButtonDialog from '../MuiButtonDialog/MuiButtonDialog';
import MuiButtonDownload from '../MuiButtonDownload/MuiButtonDownload';
import MuiButtonDrawer from '../MuiButtonDrawer/MuiButtonDrawer';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiIconButtonDialog from '../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiIconButtonDownload from '../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDrawer from '../MuiIconButtonDrawer/MuiIconButtonDrawer';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import { validComponentsRequired } from '../../utils/customProps';


const GoogleConversions = ({ sendTo, aWConversionID, button }) => {
  if (!window.awConversionId) {
    window.aWConversionID = aWConversionID;
  }

  const components = {
    MuiButtonDialog,
    MuiButtonDownload,
    MuiButtonDrawer,
    MuiButtonHref,
    MuiButtonRedirect,
    MuiIconButtonDialog,
    MuiIconButtonDownload,
    MuiIconButtonDrawer,
    MuiIconButtonHref,
    MuiIconButtonRedirect,
  };

  const conversionCall = () => {
    const callback = () => { console.log('Conversion Call back called: ', sendTo) };
    gtag('event', 'conversion', {
      send_to: sendTo,
      event_callback: callback,
    });
    // return false;
  };

  return createElement(components[button[0].component], { ...button[0], callback: conversionCall });
};

export default GoogleConversions;

GoogleConversions.propTypes = {
  sendTo: PropTypes.string.isRequired,
  aWConversionID: PropTypes.string.isRequired,
  button(props, propName, componentName) {
    const validComponents = [MuiButtonDialog,
      MuiButtonDownload,
      MuiButtonDrawer,
      MuiButtonHref,
      MuiButtonRedirect,
      MuiIconButtonDialog,
      MuiIconButtonDownload,
      MuiIconButtonDrawer,
      MuiIconButtonHref,
      MuiIconButtonRedirect];
    return validComponentsRequired(props, propName, componentName, validComponents);
  },
};

GoogleConversions.defaultProps = {
  button: [],
};
