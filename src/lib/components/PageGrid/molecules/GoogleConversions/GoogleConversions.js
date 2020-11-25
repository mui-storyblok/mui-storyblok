import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { validComponentsRequired } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
/* istanbul ignore next */
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
/* istanbul ignore next */
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));
/* istanbul ignore next */
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));

const components = {
  ButtonRedirect,
  ButtonDownload,
  IconButtonRedirect,
  IconButtonDownload,
  IconButtonDialog,
  ButtonDialog,
};

const GoogleConversions = ({ sendTo, aWConversionID, button }) => {
  const conversionCall = () => {
    window.aWConversionID = aWConversionID;
    const callback = () => { console.log('Conversion Call back called: ', sendTo); };
    window.gtag('event', 'conversion', {
      send_to: sendTo,
      event_callback: callback,
    });
    window.aWConversionID = undefined;
    return false;
  };

  return (
    <Suspense fallback={<></>}>
      {renderComponentsWithBridge(components, { ...button[0], callback: conversionCall })}
    </Suspense>
  );
};

export default GoogleConversions;

GoogleConversions.propTypes = {
  sendTo: PropTypes.string.isRequired,
  aWConversionID: PropTypes.string.isRequired,
  button(props, propName, componentName) {
    const validComponents = [
      'ButtonDownload',
      'ButtonRedirect',
      'IconButtonDownload',
      'IconButtonRedirect'];
    return validComponentsRequired(props, propName, componentName, validComponents, 1);
  },
};

GoogleConversions.defaultProps = {
  button: [],
};
