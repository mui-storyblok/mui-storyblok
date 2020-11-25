import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { Drawer as MuiDrawer } from '@material-ui/core';
import {
  validComponents,
  muiStringProp,
} from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import StoryBlok from 'lib/utils/Storyblok';

const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));

const components = {
  List,
};

const Drawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  toggleDrawer,
  content,
  open,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  let width = '100%';
  if (anchor === 'left' || anchor === 'right') width = '32vw';
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { minWidth: width });

  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    toggleDrawer(!open);
  };

  return (
    <MuiDrawer
      anchor={anchor}
      classes={{ paper: styles.root }}
      open={open}
      elevation={+elevation}
      variant={variant}
      onClose={e => handleToggleDrawer(e)}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, { ...component, toggleDrawer }, key)}
        </Suspense>
      ))}
    </MuiDrawer>
  );
};

export default Drawer;
 Drawer.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: 'bottom', 'left', 'right', 'top'
   * Side from which the drawer will appear.
   */
  anchor(props, propName, componentName) {
    const validProps = ['bottom', 'left', 'right', 'top'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * number
   * The elevation of the drawer.
   * storyblok type is a number
   */
  elevation: PropTypes.string,
  /**
   * mui props: 'permanent', 'persistent', 'temporary'
   * The variant to use.
   */
  variant(props, propName, componentName) {
    const validProps = ['permanent', 'persistent', 'temporary'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * components:
   * MuiList
   */
  content(props, propName, componentName) {
    const components = ['MuiList', 'MuiListDropdown'];
    return validComponents(props, propName, componentName, components);
  },
};
 Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'temporary',
  rootClass: [],
  content: [],
};
