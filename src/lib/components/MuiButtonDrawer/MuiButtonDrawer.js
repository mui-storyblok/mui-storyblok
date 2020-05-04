import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import MuiList from '../MuiList/MuiList';
import MuiButton from '../MuiButton/MuiButton';

const MuiButtonDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  button,
  content,
}) => {
  let width = '100%';
  if (anchor === 'left' || anchor === 'right') width = '32vw';
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { minWidth: width });
  const [isOpen, setOpen] = useState(false);
  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = (event) => {
    if (event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(!isOpen);
  };

  console.log(content);

  return (
    <>
      <MuiButton {...button[0]} onClick={e => handleToggleDrawer(e)} />
      <Drawer
        anchor={anchor}
        className={styles.root}
        classes={{ paper: styles.root }}
        open={isOpen}
        elevation={+elevation}
        variant={variant}
        onClose={e => handleToggleDrawer(e)}
      >
        {content.map((item, index) => (
          <MuiList {...item} key={index} />
        ))}
      </Drawer>
    </>
  );
};

export default MuiButtonDrawer;

MuiButtonDrawer.propTypes = {
  /**
   * stroyblok multiselect of css classes
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
   */
  elevation: PropTypes.string,
  /**
   * mui props: 'permanent' | 'persistent' | 'temporary'
   * The variant to use.
   */
  variant: PropTypes.string,
  /**
   * mui component: MuiButton
   */
  // eslint-disable-next-line react/forbid-prop-types
  button: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**
   * components:
   * MuiList
   */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MuiButtonDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'temporary',
  rootClass: [],
};
