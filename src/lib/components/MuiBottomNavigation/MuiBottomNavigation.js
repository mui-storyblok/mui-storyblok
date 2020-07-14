import React, { useState, createElement } from 'react';
import PropTypes from 'prop-types';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import GoogleConversions from '../GoogleConversions/GoogleConversions';
import StoryBlok from '../../utils/Storyblok';
import {
  dimensionProp,
  muiStringProp,
  validComponents,
} from '../../utils/customProps';

const MuiBottomNavigation = ({
  rootClass,
  showLabels,
  navActions,
  width,
  position,
  bottom,
}) => {
  const components = {
    MuiIconButton,
    MuiIconButtonRedirect,
    GoogleConversions,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass, {
    width: parseInt(width, 10),
    position,
    bottom: parseInt(bottom, 10),
  });
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(e, newValue) => {
        setValue(newValue);
      }}
      showLabels={showLabels}
      className={styles.root}
    >
      {navActions.map(item => (
        <BottomNavigationAction
          {...item}
          key={item.value}
          icon={createElement(
            components[item.icon[0].component],
            Object.assign(item.icon[0]),
          )}
        />
      ))}
    </BottomNavigation>
  );
};

export default MuiBottomNavigation;

MuiBottomNavigation.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: boolean
   * If true, all BottomNavigationActions will show their labels.
   * By default, only the selected BottomNavigationAction will show its label.
   */
  showLabels: PropTypes.bool,
  /**
   * mui prop: number
   * Width of the bottom navigation bar.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * 'absolute', 'fixed'
   * Position of the Mui Bottom Navigation.
   */
  position(props, propName, componentName) {
    const validProp = ['absolute', 'fixed'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: number
   * Number of pixels from the bottom the nav bar is set to.
   */
  bottom: PropTypes.string,
  /**
   * components:
   * MuiBottomNavigationAction
   */
  navActions(props, propName, componentName) {
    const components = ['MuiBottomNavigationAction'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiBottomNavigation.defaultProps = {
  rootClass: [],
  showLabels: false,
  width: '500',
  position: 'fixed',
  bottom: '30',
  navActions: [],
};
