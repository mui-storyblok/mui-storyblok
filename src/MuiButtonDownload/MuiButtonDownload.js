import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../utils/Storyblok';
import Button from '@material-ui/core/Button';
import downloadUrl from '../utils/downloadUrl';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

/**
 * MuiButtonDownload onClick bug is opening url in a new tab in the browser instead of dowloading.
 * More docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonDownload = ({
  buttonText,
  variant,
  color,
  size,
  rootClass,
  startIcon,
  endIcon,
  herf,
  fileName,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = async () => {
    downloadUrl(herf, fileName);
  };

  return (
    <Button
      className={styles.root}
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      startIcon={startIcon ? (
        <Suspense fallback={<div />}>
          <MuiIcon iconName={startIcon} />
        </Suspense>
      ) : null}
      endIcon={endIcon ? (
        <Suspense fallback={<div />}>
          <MuiIcon iconName={endIcon} />
        </Suspense>
      ) : null}
    >
      {buttonText}
    </Button>
  );
};

export default MuiButtonDownload;

MuiButtonDownload.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /** mui prop: 'small'| 'medium'| 'large' */
  size: PropTypes.string,
  /** mui prop: 'text' |'outlined'| 'contained */
  variant: PropTypes.string,
  /** name of Icon  */
  startIcon: PropTypes.string,
  /** name of Icon */
  endIcon: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** button text */
  buttonText: PropTypes.string.isRequired,
  /** url of the file you want to be downloaded */
  herf: PropTypes.string.isRequired,
  /** name of file */
  fileName: PropTypes.string.isRequired,
};

MuiButtonDownload.defaultProps = {
  startIcon: null,
  endIcon: null,
  rootClass: [],
  variant: 'text',
  color: 'secondary',
  size: 'medium',
};
