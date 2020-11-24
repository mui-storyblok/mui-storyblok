import React, { useState, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Icon as MuiIcon } from '@material-ui/core';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';
import { validComponents, muiStringProp } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';

/* istanbul ignore next */
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const Icon = lazy(() => import('lib/components/PageGrid/atoms/Icon/Icon'));

const components = {
  Typography,
  ButtonRedirect,
  IconButtonRedirect,
  Icon,
};

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
              (component, key) => (
                <Suspense fallback={<></>}>
                  {renderComponentsWithBridg(components, component, key)}
                </Suspense>
              ),
            )}
            <MuiIcon
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
            </MuiIcon>
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
    const comps = ['Typography'];
    return validComponents(props, propName, componentName, comps);
  },

};

NotificationBanner.defaultProps = {
  color: 'primary',
  rootClass: [],
  content: [],
  top: '60px',
};
