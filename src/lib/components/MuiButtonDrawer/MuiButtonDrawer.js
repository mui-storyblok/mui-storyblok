import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Drawer } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import {
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
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
   * mui component: MuiButton
   */
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /**
   * components:
   * MuiList
   */
  content(props, propName, componentName) {
    const components = ['MuiList'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiButtonDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'temporary',
  rootClass: [],
  button: [],
  content: [],
};
