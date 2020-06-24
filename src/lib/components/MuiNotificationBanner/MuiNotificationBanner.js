import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Icon } from '@material-ui/core';
import { validComponents } from '../../utils/customProps';
import MuiTypography from '../MuiTypography/MuiTypography';
import Storyblok from '../../utils/Storyblok';

export const MuiNotificationBanner = ({
  rootClass,
  color,
  content,
  top,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { top });
  const [showBanner, setBanner] = useState(true);
  const handleClose = () => {
    setBanner(false);
  };

  return (
    showBanner
      ? (
        <AppBar
          className={styles.root}
          color={color}
          position="fixed"
        >
          <div style={{ position: 'relative' }}>
            {content.map((item, index) => <MuiTypography {...item} key={index} />)}
            <Icon
              onClick={() => handleClose()}
              style={{
                cursor: 'pointer',
                color: 'red',
                position: 'absolute',
                top: '15px',
                right: '15px',
              }}
            >
              clear
            </Icon>
          </div>
        </AppBar>
      ) : null
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
   * Positioning of the banner from the top of the page.
   * */
  top: PropTypes.string,
  /**
   * Components: MuiTypography
   */
  content(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components);
  },
  // content: PropTypes.arrayOf(PropTypes.shape({
  //   component: PropTypes.string.isRequired,
  // })).isRequired,
};

MuiNotificationBanner.defaultProps = {
  color: 'primary',
  rootClass: [],
  content: [],
  top: '60px',
};
