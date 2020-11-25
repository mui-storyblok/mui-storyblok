import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List as MuiList, Collapse } from '@material-ui/core';
import StoryBlok from 'lib/utils/Storyblok';
import { validComponentsRequired, validComponents } from 'lib/utils/customProps';
import { renderComponents } from 'lib/utils/customComponents';
import List from 'lib/components/PageGrid/organisms/List/List';
import ListExpansion from './components/ListExpansion/ListExpansion';

export const ListDropdown = ({
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
    <MuiList className={styles.root}>
      <ListExpansion {...listExpansion[0]} handleClick={handleClick} open={open} />
      <Collapse in={open} timeout="auto" unmountOnExit>
        {content.map((component, key) => renderComponents({ List }, component, key))}
      </Collapse>
    </MuiList>
  );
};

export default ListDropdown;

ListDropdown.propTypes = {
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
    const components = ['List'];
    return validComponents(props, propName, componentName, components);
  },
  /**
   * components:
   * MuiListItem
   */
  listExpansion(props, propName, componentName) {
    const components = ['ListExpansion'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

ListDropdown.defaultProps = {
  rootClass: [],
  content: [],
  listExpansion: [],
};
