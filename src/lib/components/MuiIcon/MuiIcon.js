import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Storyblok from '../../utils/Storyblok';

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
  /** mui prop: "inherit", "primary", "secondary", "action", "error", "disabled" */
  color: PropTypes.string,
  /** mui prop: 'default' | 'small'| 'inherit'| 'large' */
  fontSize: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

};

MuiIcon.defaultProps = {
  rootClass: [],
  color: 'secondary',
  fontSize: 'default',
};
