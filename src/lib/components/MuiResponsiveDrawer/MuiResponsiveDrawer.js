import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import StoryBlok from '../../utils/Storyblok';
import {
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';
import MuiList from '../MuiList/MuiList';
import MuiListDropdown from '../MuiListDropdown/MuiListDropdown';

const MuiResponsiveDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  content,
  only,
}) => {
  const components = {
    MuiList,
    MuiListDropdown,
  };

  let width = '100%';
  if (anchor === 'left' || anchor === 'right') width = '32vw';
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { minWidth: width });

  return (
    <Hidden only={only}>
      <Drawer
        className={styles.root}
        anchor={anchor}
        classes={{ paper: styles.root }}
        elevation={+elevation}
        variant={variant}
        open
      >
        {content.map((component, key) => renderComponents(components, component, key)) }
      </Drawer>
    </Hidden>
  );
};

export default MuiResponsiveDrawer;

MuiResponsiveDrawer.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop array of: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   * Hide the given breakpoint(s).
   * */
  only: PropTypes.arrayOf(PropTypes.string),
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
   * MuiList, MuiListDropdown
   */
  content(props, propName, componentName) {
    const components = ['MuiList', 'MuiListDropdown'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiResponsiveDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'permanent',
  rootClass: [],
  content: [],
  only: [],
};
