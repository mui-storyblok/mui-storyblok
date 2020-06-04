import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { List, Collapse } from '@material-ui/core';
import MuiListExpansion from '../MuiListExpansion/MuiListExpansion';
import MuiList from '../../../MuiList/MuiList';
import StoryBlok from '../../../../utils/Storyblok';


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
        {content.map((item, index) => (<MuiList {...item} key={index} />))}
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
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * components:
   * MuiListItem
   */
  listExpansion: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiListDropdown.defaultProps = {
  rootClass: [],
};
