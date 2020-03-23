import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../utils/Storyblok';
import Button from '@material-ui/core/Button';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

/**
 * MuiButtonHerf takes a href to redirect to
 * more docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonHerf = ({
  buttonText,
  variant,
  color,
  size,
  rootClass,
  startIcon,
  endIcon,
  herf,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = async () => {
    window.location.assign(herf);
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

export default MuiButtonHerf;

MuiButtonHerf.propTypes = {
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
  /** url to redirect to */
  herf: PropTypes.string.isRequired,
};

MuiButtonHerf.defaultProps = {
  startIcon: null,
  endIcon: null,
  rootClass: [],
  variant: 'text',
  color: 'secondary',
  size: 'medium',
};
