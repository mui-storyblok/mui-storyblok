import React from 'react';
import PropTypes from 'prop-types';
import downloadUrl from '../../utils/downloadUrl';
import {
  validComponents,
} from '../../utils/customProps';
import MuiButton from '../MuiButton/MuiButton';

/**
 * MuiButtonDownload onClick bug is opening url in a new tab in the browser instead of dowloading.
 * More docs and demos at https://material-ui.com/api/button/
 */

const MuiButtonDownload = ({
  button,
  href,
  fileName,
}) => {
  const onClick = async () => {
    downloadUrl(href, fileName);
  };

  const muibutton = button[0];

  return <MuiButton {...muibutton} onClick={onClick} />;
};

export default MuiButtonDownload;

MuiButtonDownload.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
};

MuiButtonDownload.defaultProps = {
  button: [],
};
