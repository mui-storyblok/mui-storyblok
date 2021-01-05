import React from 'react';
import PropTypes from 'prop-types';
import { validComponentsRequired } from 'lib/utils/customProps';
import downloadUrl from 'lib/utils/downloadUrl';
import IconButton from '../IconButton/IconButton';

/**
 * IconButtonDownload is used in storyblok that will download a href
 */

export const IconButtonDownload = ({
  href,
  fileName,
  iconButton,
  callback,
}) => {
  const onClick = () => {
    if (callback) callback();
    downloadUrl(href, fileName);
  };
  const btn = iconButton[0];

  return (
    <IconButton
      {...btn}
      onClick={onClick}
    />
  );
};

export default IconButtonDownload;

IconButtonDownload.propTypes = {
  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
  /** IconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['IconButton'], 1);
  },
  // callback to run before download
  callback: PropTypes.func,
};

IconButtonDownload.defaultProps = {
  iconButton: [],
  callback: undefined,
};

