import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Icon } from '@material-ui/core';
import MuiTypography from '../MuiTypography/MuiTypography';
import Storyblok from '../../utils/Storyblok';

export const MuiNotificationBanner = ({
  rootClass,
  color,
  content,
  height,
  top,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height, top });
  return (
    <AppBar
      className={styles.root}
      color={color}
      position="fixed"
    >
      <>
        {content.map((item, index) => <MuiTypography {...item} key={index} />)}
        <Icon
          style={{ color: 'red' }}
        >
          clear
        </Icon>
      </>
    </AppBar>
  );
};

export default MuiNotificationBanner;

MuiNotificationBanner.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component.
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'
   * AppBar: The color of the component.
   * It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * Height of the App Bar.
   * */
  height: PropTypes.string,
  /**
   * Positioning of the banner from the top of the page.
   * */
  top: PropTypes.string,
  /**
   * Components: MuiTypography
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiNotificationBanner.defaultProps = {
  height: '85px',
  color: 'primary',
  rootClass: [],
  top: '10%',
};
