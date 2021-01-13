import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Dialog as MuiDialog } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const DialogActions = lazy(() => import('./components/DialogActions/DialogActions'));
/* istanbul ignore next */
const DialogTitle = lazy(() => import('./components/DialogTitle/DialogTitle'));
/* istanbul ignore next */
const DialogContent = lazy(() => import('./components/DialogContent/DialogContent'));

const components = {
  DialogActions,
  DialogTitle,
  DialogContent,
};

const Dialog = ({
  open,
  toggleDialog,
  rootClass,
  fullWidth,
  fullScreen,
  maxWidth,
  content,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const dialogStyles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiDialog
      open={open}
      onClose={toggleDialog}
      className={`${dialogStyles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
      fullWidth={fullWidth}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, { ...component, toggleDialog }, key)}
        </Suspense>
      ))}
    </MuiDialog>
  );
};

export default Dialog;

Dialog.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** 'DialogContent', 'DialogActions' */
  content(props, propName, componentName) {
    const comps = ['DialogTitle', 'DialogContent', 'DialogActions'];
    return validComponents(props, propName, componentName, comps);
  },
  /** passed down from parent component to hide or show Dialog */
  open: PropTypes.bool,
  /** If true, the dialog will be full-screen */
  fullWidth: PropTypes.bool,
  /** If true, the dialog stretches to maxWidth. */
  fullScreen: PropTypes.bool,
  /** Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen. Set to false to disable maxWidth.
  */
  maxWidth: PropTypes.string,
  /** passed down from parent component to hide or show Dialog */
  toggleDialog: PropTypes.func.isRequired,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

Dialog.defaultProps = {
  open: false,
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  fullWidth: false,
  fullScreen: false,
  maxWidth: 'sm',
};
