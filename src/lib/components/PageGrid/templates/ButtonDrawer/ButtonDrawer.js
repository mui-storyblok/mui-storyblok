import React, { useState } from 'react';
import { validComponents } from 'lib/utils/customProps';
import Button from 'lib/components/PageGrid/molecules/Button/Button';
import Drawer from 'lib/components/PageGrid/molecules/Drawer/Drawer';

/**
 * ButtonDrawer controls Drawer open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/ and  https://material-ui.com/api/Drawer/
 * Uses MuiButton and MuiDrawer
 */

export const ButtonDrawer = ({
  drawer,
  button,
}) => {
  const [state, setState] = useState({ open: false });
  const toggleDrawer = () => setState({ ...state, open: !state.open });
  const muiDrawer = drawer[0];
  const muibutton = button[0];

  return (
    <>
      <Button {...muibutton} onClick={toggleDrawer} />
      <Drawer {...muiDrawer} open={state.open} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default ButtonDrawer;

ButtonDrawer.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['Button'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiDrawer Allowed maximum: 1 */
  drawer(props, propName, componentName) {
    const components = ['Drawer'];
    return validComponents(props, propName, componentName, components, 1);
  },

};

ButtonDrawer.defaultProps = {
  button: [],
  drawer: [],
};
