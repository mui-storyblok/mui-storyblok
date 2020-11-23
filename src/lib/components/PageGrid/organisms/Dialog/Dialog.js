import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Dialog as MuiDialog } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';

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
  content,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const dialogStyles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiDialog
      open={open}
      className={`${dialogStyles.root} ${storyblokClass}`}
      onClose={toggleDialog}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, { ...component, toggleDialog }, key)}
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
  /** passed down from parent component to hide or show Dialog */
  toggleDialog: PropTypes.func.isRequired,
};

Dialog.defaultProps = {
  open: false,
  rootClass: [],
  content: [],
};
