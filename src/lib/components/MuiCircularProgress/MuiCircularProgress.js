/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Storyblok from '../../utils/Storyblok';

/**
 * MuiCircularProgress is used in storyblok redirect to react routes
 */

export const MuiCircularProgress = ({
  rootClass,
  color,
  disableShrink,
  size,
  thickness,
  variant,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CircularProgress
      className={styles.root}
      color={color}
      disableShrink={disableShrink}
      size={parseInt(size, 10)}
      thickness={parseInt(thickness, 10)}
      variant={variant}
    />
  );
};

export default MuiCircularProgress;

MuiCircularProgress.propTypes = {
  /**
   * mui prop: "primary", "secondary", "inherit"
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, the shrink animation is disabled. This only works if variant is indeterminate.
   * */
  disableShrink: PropTypes.bool,
  /**
   * mui prop
   * The size of the circle. If using a number, the pixel unit is assumed.
   If using a string, you need to provide the CSS unit, e.g '3rem'.
   * */
  size: PropTypes.string,
  /**
   * mui prop
   * The thickness of the circle.
   * */
  thickness: PropTypes.string,
  /**
   * mui prop: determinate | indeterminate | static
   * The thickness of the circle.
   * */
  variant: PropTypes.string,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiCircularProgress.defaultProps = {
  rootClass: [],
  color: 'primary',
  disableShrink: false,
  size: 40,
  thickness: 3.6,
  variant: 'indeterminate',
};
