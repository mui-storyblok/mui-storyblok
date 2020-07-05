import React from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';
import { validComponents } from '../../../../utils/customProps';
import Storyblok from '../../../../utils/Storyblok';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../MuiButtonDownload/MuiButtonDownload';
import { renderComponents } from '../../../../utils/customComponents';

const MuiDialogActions = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <DialogActions
      className={styles.root}
    >
      {content.map((component, key) => renderComponents(components, component, key))}
    </DialogActions>
  );
};

export default MuiDialogActions;

MuiDialogActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
    'MuiIconButtonRedirect',
    'MuiIconButtonHref',
    'MuiIconButtonDownload',
    'MuiButtonRedirect',
    'MuiButtonHref',
    'MuiButtonDownload',
    */
  content(props, propName, componentName) {
    const components = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiDialogActions.defaultProps = {
  rootClass: [],
  content: [],
};
