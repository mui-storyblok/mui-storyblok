import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import StoryBlok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';

import ListItemIcon from 'lib/components/PageGrid/molecules/ListItemIcon/ListItemIcon';

export const MuiListExpansion = ({
  rootClass,
  handleClick,
  icon,
  open,
  primaryText,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <>
      <ListItem button onClick={handleClick} className={styles.root}>
        {icon.length ? <ListItemIcon {...icon[0]} /> : null}
        <ListItemText primary={primaryText} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
    </>
  );
};

export default MuiListExpansion;

MuiListExpansion.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Text of the List item dropdown
   */
  primaryText: PropTypes.string.isRequired,
  /**
   * components:
   * ListItemIcon
   */
  icon(props, propName, componentName) {
    const comps = ['ListItemIcon'];
    return validComponents(props, propName, componentName, comps, 1);
  },
  /** not in storyblok passed down from parent component */
  handleClick: PropTypes.func.isRequired,
  /** not in storyblok passed down from parent component */
  open: PropTypes.bool.isRequired,
};

MuiListExpansion.defaultProps = {
  rootClass: [],
  icon: [],
};
