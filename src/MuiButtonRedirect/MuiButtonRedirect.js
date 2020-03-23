import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Storyblok from '../utils/Storyblok';
import Button from '@material-ui/core/Button';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

/**
 * MuiButtonRedirect onClick will redirect you to a new route in the current App or legacy App.
 * More docs and demos at https://material-ui.com/api/button/
 */

export const MuiButtonRedirect = ({
  history,
  buttonText,
  redirectRoute,
  variant,
  color,
  size,
  rootClass,
  startIcon,
  endIcon,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const redirect = async () => {
    return history.push(redirectRoute);
  };

  return (
    <Button
      className={styles.root}
      variant={variant}
      color={color}
      size={size}
      onClick={redirect}
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

export default withRouter(MuiButtonRedirect);

MuiButtonRedirect.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /** mui prop: 'small'| 'medium'| 'large' */
  size: PropTypes.string,
  /** mui prop: 'text' |'outlined'| 'contained */
  variant: PropTypes.string,
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /** name of Icon  */
  startIcon: PropTypes.string,
  /** name of Icon */
  endIcon: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiButtonRedirect.defaultProps = {
  startIcon: null,
  endIcon: null,
  rootClass: [],
  variant: 'text',
  color: 'secondary',
  size: 'medium',
};
