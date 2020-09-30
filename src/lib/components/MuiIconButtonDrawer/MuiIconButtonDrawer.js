import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  validComponents,
  validComponentsRequired,
  muiStringProp,
} from '../../utils/customProps';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import MuiDrawer from '../MuiDrawer/MuiDrawer';

const MuiIconButtonDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  icon,
  content,
}) => {
  const [isOpen, setOpen] = useState(false);

  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <MuiIconButton {...icon[0]} onClick={handleToggleDrawer} />
      <MuiDrawer
        anchor={anchor}
        rootClass={rootClass}
        open={isOpen}
        elevation={+elevation}
        variant={variant}
        onClose={handleToggleDrawer}
        content={content}
      />
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
   * storyblok type is a number
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
   * mui component: MuiIcon
   */
  icon(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIcon'], 1);
  },
  /**
   * components:
   * MuiList
   */
  content(props, propName, componentName) {
    const components = ['MuiList', 'MuiListDropdown'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiIconButtonDrawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  variant: 'temporary',
  rootClass: [],
  icon: [],
  content: [],
};
