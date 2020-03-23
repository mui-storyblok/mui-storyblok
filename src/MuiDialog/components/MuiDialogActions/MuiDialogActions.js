import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import Storyblok from '../../../utils/Storyblok';

const MuiIconButtonRedirect = lazy(() => import('../../../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../../../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../../../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiButtonRedirect = lazy(() => import('../../../MuiButtonRedirect/MuiButtonRedirect'));
const MuiButtonHerf = lazy(() => import('../../../MuiButtonHerf/MuiButtonHerf'));
const MuiButtonDownload = lazy(() => import('../../../MuiButtonDownload/MuiButtonDownload'));

const MuiDialogActions = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiButtonRedirect,
    MuiButtonHerf,
    MuiButtonDownload,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <DialogActions
      className={styles.root}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </DialogActions>
  );
};

export default MuiDialogActions;

MuiDialogActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiButtonRedirect */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiDialogActions.defaultProps = {
  rootClass: [],
};
