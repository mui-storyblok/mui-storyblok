import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import MuiListItemIcon from '../../../MuiList/components/MuiListItem/components/MuiListItemIcon/MuiListItemIcon';
import StoryBlok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';

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
        {icon.length ? <MuiListItemIcon {...icon[0]} /> : null}
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
   * MuiListItemIcon
   */
  icon(props, propName, componentName) {
    const components = ['MuiListItemIcon'];
    return validComponents(props, propName, componentName, components, 1);
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
