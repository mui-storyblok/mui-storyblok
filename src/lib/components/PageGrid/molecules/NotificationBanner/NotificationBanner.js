import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Icon } from '@material-ui/core';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';
import { validComponents, muiStringProp } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import Typography from 'lib/components/PageGrid/molecules/Typography/Typography';

export const NotificationBanner = ({
  rootClass,
  color,
  content,
  top,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
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
          color={color}
          position="fixed"
          className={`${styles.root} ${storyblokClass}`}
          data-blok-c={dataBlokC}
          data-blok-uid={dataBlokUid}
        >
          <div style={{ position: 'relative' }}>
            {content.map(
              (component, key) => renderComponentsWithBridg({ Typography }, component, key),
            )}
            <Icon
              onClick={handleClose}
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

export default NotificationBanner;

NotificationBanner.propTypes = {
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

NotificationBanner.defaultProps = {
  color: 'primary',
  rootClass: [],
  content: [],
  top: '60px',
};
