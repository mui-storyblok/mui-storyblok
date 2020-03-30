import React from 'react';
import PropTypes from 'prop-types';

import downloadUrl from 'lib/utils/downloadUrl';
import MuiIconButton from 'lib/components/MuiIconButton/MuiIconButton';

/**
 * MuiIconButtonDownload is used in storyblok that will download a href
 */

export const MuiIconButtonDownload = ({
  href,
  fileName,
  iconButton,
}) => {
  const onClick = () => {
    downloadUrl(href, fileName);
  };
  const muiIconButton = iconButton[0];

  return (
    <MuiIconButton
      {...muiIconButton}
      onClick={onClick}
    />
  );
};

export default MuiIconButtonDownload;

MuiIconButtonDownload.propTypes = {
  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,

  /** MuiIconButton Allowed maximum: 1 */
  iconButton: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiIconButtonDownload.defaultProps = {};
