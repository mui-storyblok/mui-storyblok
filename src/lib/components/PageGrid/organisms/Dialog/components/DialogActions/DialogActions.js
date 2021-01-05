import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { DialogActions as MuiDialogActions } from '@material-ui/core';
import { validComponents } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));

const components = {
  ButtonRedirect,
  ButtonDownload,
  IconButtonRedirect,
  IconButtonDownload,
};

const DialogActions = ({
  content,
  rootClass,
  disableSpacing,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  return (
    <MuiDialogActions
      disableSpacing={disableSpacing}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, component, key)}
        </Suspense>
      ))}
    </MuiDialogActions>
  );
};

export default DialogActions;

DialogActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
    'ButtonRedirect',
    */
  content(props, propName, componentName) {
    const comps = [
      'ButtonRedirect',
    ];
    return validComponents(props, propName, componentName, comps);
  },

  disableSpacing: PropTypes.bool,

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

DialogActions.defaultProps = {
  rootClass: [],
  content: [],
  disableSpacing: false,
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
