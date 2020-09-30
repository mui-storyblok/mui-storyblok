import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
import MuiDrawer from '../MuiDrawer/MuiDrawer';
import MuiButton from '../MuiButton/MuiButton';

const MuiButtonDrawer = ({
  anchor,
  rootClass,
  elevation,
  variant,
  button,
  content,
}) => {
  const [isOpen, setOpen] = useState(false);
  // eslint-disable-next-line no-multi-assign
  const handleToggleDrawer = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <MuiButton {...button[0]} onClick={handleToggleDrawer} />
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
