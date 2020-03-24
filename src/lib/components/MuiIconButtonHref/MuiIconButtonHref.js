import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../../utils/Storyblok';
import IconButton from '@material-ui/core/IconButton';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

/**
 * MuiIconButtonHref is used in storyblok redirect to react routes
 */

export const MuiIconButtonHref = ({
  color,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  rootClass,
  icon,
  herf,
}) => {
  const components = {
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = () => {
    window.location.assign(herf);
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

export default MuiIconButtonHref;

MuiIconButtonHref.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /* mui prop: true | false */
  disableFocusRipple: PropTypes.bool,
  /* mui prop: true | false */
  disableRipple: PropTypes.bool,
  /* mui prop: 'start' | 'end' | false */
  edge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** mui prop: 'small' | "medium" */
  size: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** url to redirect to */
  herf: PropTypes.string.isRequired,

  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiIconButtonHref.defaultProps = {
  color: 'default',
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: 'medium',
  rootClass: [],
};
