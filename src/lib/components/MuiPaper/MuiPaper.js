import React from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../../utils/Storyblok';

export const MuiPaper = ({
  children,
  rootClass,
  elevation,
  square,
  variant,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  return (
    <MuiPaper
      classes={styles.rootClass}
      elevation={elevation}
      square={square}
      variant={variant}
    />
  );
};

export default MuiPaper;

MuiPaper.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * It accepts values between 0 and 24 inclusive.
   * Shadow depth, corresponds to dp in the spec.
   */
  elevation: PropTypes.number,
  /**
   * mui prop: true | false
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * mui prop: 'elevation' | 'outlined'
   * The variant to use.
   */
  variant: PropTypes.bool,
  /**
   * The content of the component,
   */
  children: PropTypes.node,
};

MuiPaper.defaultProps = {
  rootClass: [],
  elevation: 1,
  square: false,
  variant: 'elevation',
  children: undefined,
};
