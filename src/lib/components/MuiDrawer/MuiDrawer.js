import React from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import {
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';
import MuiList from '../MuiList/MuiList';
import MuiListDropdown from '../MuiListDropdown/MuiListDropdown';

const MuiDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  content,
  onClose,
  open,
}) => {
  const components = {
    MuiList,
    MuiListDropdown,
  };

  let width = '100%';
  if (anchor === 'left' || anchor === 'right') width = '32vw';
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { minWidth: width });

  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    onClose(event);
  };

  return (
    <Drawer
      className={styles.root}
      anchor={anchor}
      classes={{ paper: styles.root }}
      elevation={+elevation}
      variant={variant}
      open={open}
      onClose={e => handleToggleDrawer(e)}
    >
      {content.map((component, key) => renderComponents(components, component, key)) }
    </Drawer>
  );
};

export default MuiDrawer;

MuiDrawer.propTypes = {
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
   * MuiList, MuiListDropdown
   */
  content(props, propName, componentName) {
    const components = ['MuiList', 'MuiListDropdown'];
    return validComponents(props, propName, componentName, components);
  },


  open: PropTypes.bool,
  onClose: PropTypes.func,
};

MuiDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'permanent',
  rootClass: [],
  content: [],
  open: false,
  onClose: undefined,
};
