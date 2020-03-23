import React, { createElement, lazy, Suspense } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Storyblok from '../utils/Storyblok';
import IconButton from '@material-ui/core/IconButton';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

/**
 * MuiIconButtonRedirect is used in storyblok redirect to react routes
 */

export const MuiIconButtonRedirect = ({
  history,
  color,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  rootClass,
  icon,
  redirectRoute,
}) => {
  const components = {
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = async () => {
    return history.push(redirectRoute);
  };

  return (
    <IconButton
      onClick={onClick}
      className={styles.root}
      color={color}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge === 'false' ? false : edge}
      size={size}
    >
      <Suspense fallback={<div />}>
        {icon[0] ? createElement(components[icon[0].component], { ...icon[0] }) : null}
      </Suspense>
    </IconButton>
  );
};

export default withRouter(MuiIconButtonRedirect);

MuiIconButtonRedirect.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /* mui prop: If true, the keyboard focus ripple will be disabled. disableRipple must also be true. */
  disableFocusRipple: PropTypes.bool,
  /* mui prop: If true, the ripple effect will be disabled. */
  disableRipple: PropTypes.bool,
  /* mui prop: 'start' | 'end' | false */
  edge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** mui prop: 'small' | "medium" */
  size: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiIconButtonRedirect.defaultProps = {
  color: 'default',
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: 'medium',
  rootClass: [],
};
