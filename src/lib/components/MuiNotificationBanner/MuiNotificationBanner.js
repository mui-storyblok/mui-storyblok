import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Icon } from '@material-ui/core';
import { renderComponents } from '../../utils/customComponents';
import { validComponents, muiStringProp } from '../../utils/customProps';
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
            {content.map((component, key) => renderComponents({ MuiTypography }, component, key))}
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
  color(props, propName, componentName) {
    const validProps = ['default', 'inherit', 'primary', 'secondary', 'transparent'];
    return muiStringProp(props, propName, componentName, validProps);
  },
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
