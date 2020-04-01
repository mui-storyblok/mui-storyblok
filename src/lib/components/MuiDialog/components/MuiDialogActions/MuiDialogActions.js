import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import DialogActions from '@material-ui/core/DialogActions';

import Storyblok from 'lib/utils/Storyblok';
import MuiIconButtonRedirect from 'lib/components/MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from 'lib/components/MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from 'lib/components/MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from 'lib/components/MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from 'lib/components/MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from 'lib/components/MuiButtonDownload/MuiButtonDownload';

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

  /** MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiDialogActions.defaultProps = {
  rootClass: [],
};
