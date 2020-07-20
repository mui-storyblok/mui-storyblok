import React, { createElement } from 'react';
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
import GoogleConversions from '../../../GoogleConversions/GoogleConversions';

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
    GoogleConversions,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <DialogActions
      className={styles.root}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
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
    'GoogleConversions',
    */
  content(props, propName, componentName) {
    const components = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'GoogleConversion',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiDialogActions.defaultProps = {
  rootClass: [],
  content: [],
};
