/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { validComponents } from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';
import Storyblok from '../../utils/Storyblok';
import MuiListItem from './components/MuiListItem/MuiListItem';
import MuiListItemButton from './components/MuiListItemButton/MuiListItemButton';

const MuiList = ({
  rootClass,
  dense,
  disablePadding,
  width,
  content,
}) => {
  const components = {
    MuiListItem,
    MuiListItemButton,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <List
      className={styles.root}
      dense={dense}
      disablePadding={disablePadding}
      width={width}
    >
      {content.map((component, key) => renderComponents(components, component, key))}
    </List>
  );
};

export default MuiList;

MuiList.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: true | false */
  disablePadding: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The prop is available to descendant components as the dense context.
   * */
  dense: PropTypes.bool,
  /** width of list */
  width: PropTypes.string,

  /** MuiListItem */
  content(props, propName, componentName) {
    const components = ['MuiListItem', 'MuiListItemButton'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiList.defaultProps = {
  width: '100%',
  dense: false,
  disablePadding: false,
  rootClass: [],
  content: [],
};
