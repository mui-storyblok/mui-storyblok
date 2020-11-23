import React from 'react';
import PropTypes from 'prop-types';
import downloadUrl from 'lib/utils/downloadUrl';
import {
  validComponents,
} from 'lib/utils/customProps';

import Button from '../Button/Button';

/**
 * ButtonDownload onClick bug is opening url in a new tab in the browser instead of dowloading.
 * More docs and demos at https://material-ui.com/api/button/
 */

const ButtonDownload = ({
  button,
  href,
  fileName,
  callback,
}) => {
  const onClick = async () => {
    if (callback) callback();
    downloadUrl(href, fileName);
  };

  const muibutton = button[0];

  return <Button {...muibutton} onClick={onClick} />;
};

export default ButtonDownload;

ButtonDownload.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['Button'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
  // callback to run before download
  callback: PropTypes.func,
};

ButtonDownload.defaultProps = {
  button: [],
  callback: undefined,
};
