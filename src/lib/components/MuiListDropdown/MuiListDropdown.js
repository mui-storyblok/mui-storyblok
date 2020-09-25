import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Collapse } from '@material-ui/core';
import MuiListExpansion from './components/MuiListExpansion/MuiListExpansion';

import MuiList from '../MuiList/MuiList';
import StoryBlok from '../../utils/Storyblok';
import { validComponentsRequired, validComponents } from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';

export const MuiListDropdown = ({
  rootClass,
  listExpansion,
  content,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List className={styles.root}>
      <MuiListExpansion {...listExpansion[0]} handleClick={handleClick} open={open} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {content.map((component, key) => renderComponents({ MuiList }, component, key))}
      </Collapse>
    </List>
  );
};

export default MuiListDropdown;

MuiListDropdown.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * components:
   * MuiListItem
   */
  content(props, propName, componentName) {
    const components = ['MuiList'];
    return validComponents(props, propName, componentName, components);
  },
  /**
   * components:
   * MuiListItem
   */
  listExpansion(props, propName, componentName) {
    const components = ['MuiListItem'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

MuiListDropdown.defaultProps = {
  rootClass: [],
  content: [],
  listExpansion: [],
};
