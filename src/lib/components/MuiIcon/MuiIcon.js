import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Storyblok from '../../utils/Storyblok';
// import styles for icons in styleguide
import '../../styles/styles.scss';

/**
 * MuiIcon is used in storyblok redirect to react routes
 */

export const MuiIcon = ({
  color,
  fontSize,
  iconName,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <Icon
      className={styles.root}
      color={color}
      fontSize={fontSize}
    >
      {iconName}
    </Icon>
  );
};

export default MuiIcon;

MuiIcon.propTypes = {
  /** any icon from https://material.io/resources/icons/?style=baseline */
  iconName: PropTypes.string.isRequired,
  /**
   * mui prop: "inherit", "primary", "secondary", "action", "error", "disabled"
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * mui prop: 'default' | 'small'| 'inherit'| 'large'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * */
  fontSize: PropTypes.string,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiIcon.defaultProps = {
  rootClass: [],
  color: 'secondary',
  fontSize: 'default',
};
