import React, { useState, createElement } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import MuiList from '../MuiList/MuiList';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import MuiListDropdown from './components/MuiListDropdown/MuiListDropdown';

const MuiIconButtonDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  icon,
  content,
}) => {
  const components = {
    MuiList,
    MuiListDropdown,
  };

  let width = '100%';
  if (anchor === 'left' || anchor === 'right') width = '32vw';
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { minWidth: width });
  const [isOpen, setOpen] = useState(false);

  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!isOpen);
  };

  return (
    <>
      <MuiIconButton {...icon[0]} onClick={e => handleToggleDrawer(e)} />
      <Drawer
        anchor={anchor}
        className={styles.root}
        classes={{ paper: styles.root }}
        open={isOpen}
        elevation={+elevation}
        variant={variant}
        onClose={e => handleToggleDrawer(e)}
      >
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Drawer>
    </>
  );
};

export default MuiIconButtonDrawer;

MuiIconButtonDrawer.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: 'bottom' | 'left' | 'right' | 'top'
   * Side from which the drawer will appear.
   */
  anchor: PropTypes.string,
  /**
   * number
   * The elevation of the drawer.
   * storyblok type is a number
   */
  elevation: PropTypes.string,
  /**
   * mui props: 'permanent' | 'persistent' | 'temporary'
   * The variant to use.
   */
  variant: PropTypes.string,
  /**
   * mui component: MuiIcon
   */
  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * components:
   * MuiList
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiIconButtonDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'temporary',
  rootClass: [],
};
