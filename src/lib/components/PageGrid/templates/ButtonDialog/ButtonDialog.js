import React, { useState } from 'react';
import { validComponents } from 'lib/utils/customProps';
import Button from 'lib/components/PageGrid/molecules/Button/Button';
import Dialog from 'lib/components/PageGrid/organisms/Dialog/Dialog';

/**
 * ButtonDialog controls Dialog open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/ and  https://material-ui.com/api/dialog/
 * Uses MuiButton and MuiDialog
 */

export const ButtonDialog = ({
  dialog,
  button,
}) => {
  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });
  const muidialog = dialog[0];
  const muibutton = button[0];

  return (
    <>
      <Button {...muibutton} onClick={toggleDialog} />
      <Dialog {...muidialog} open={state.open} toggleDialog={toggleDialog} />
    </>
  );
};

export default ButtonDialog;

ButtonDialog.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['Button'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiDialog Allowed maximum: 1 */
  dialog(props, propName, componentName) {
    const components = ['Dialog'];
    return validComponents(props, propName, componentName, components, 1);
  },

};

ButtonDialog.defaultProps = {
  button: [],
  dialog: [],
};
