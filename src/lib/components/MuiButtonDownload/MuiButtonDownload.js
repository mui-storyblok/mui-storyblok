import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import downloadUrl from 'lib/utils/downloadUrl';
import MuiButton from 'lib/components/MuiButton/MuiButton';

/**
 * MuiButtonDownload onClick bug is opening url in a new tab in the browser instead of dowloading.
 * More docs and demos at https://material-ui.com/api/button/
 */

const MuiButtonDownload = ({
  button,
  href,
  fileName,
}) => {
  const components = {
    MuiButton,
  };

  const onClick = async () => {
    downloadUrl(href, fileName);
  };

  const muibutton = button[0];

  return (
    <>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick },
        )
        : null
    }
    </>
  );
};

export default MuiButtonDownload;

MuiButtonDownload.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** url of the file you want to be downloaded */
  href: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
};

MuiButtonDownload.defaultProps = {};
