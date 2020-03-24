import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import downloadUrl from '../../utils/downloadUrl';

const MuiButton = lazy(() => import('../MuiButton/MuiButton'));

/**
 * MuiButtonDownload onClick bug is opening url in a new tab in the browser instead of dowloading.
 * More docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonDownload = ({
  button,
  herf,
  fileName,
}) => {
  const components = {
    MuiButton,
  };

  const onClick = async () => {
    downloadUrl(herf, fileName);
  };

  const muibutton = button[0];

  return (
    <Suspense fallback={<div />}>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick },
        )
        : null
    }
    </Suspense>
  );
};

export default MuiButtonDownload;

MuiButtonDownload.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** url of the file you want to be downloaded */
  herf: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
};

MuiButtonDownload.defaultProps = {};
