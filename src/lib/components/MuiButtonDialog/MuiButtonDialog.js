import React, { useState } from 'react';
import {
  validComponents,
} from '../../utils/customProps';
import MuiButton from '../MuiButton/MuiButton';
import MuiDialog from '../MuiDialog/MuiDialog';

/**
 * MuiButtonDialog controls Dialog open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/ and  https://material-ui.com/api/dialog/
 * Uses MuiButton and MuiDialog
 */

export const MuiButtonDialog = ({
  dialog,
  button,
}) => {
  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });
  const muidialog = dialog[0];
  const muibutton = button[0];

  return (
    <>
      <MuiButton {...muibutton} onClick={toggleDialog} />
      <MuiDialog {...muidialog} open={state.open} toggleDialog={toggleDialog} />
    </>
  );
};

export default MuiButtonDialog;

MuiButtonDialog.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button(props, propName, componentName) {
    const components = ['MuiButton'];
    return validComponents(props, propName, componentName, components, 1);
  },

  /** MuiDialog Allowed maximum: 1 */
  dialog(props, propName, componentName) {
    const components = ['MuiDialog'];
    return validComponents(props, propName, componentName, components, 1);
  },

};

MuiButtonDialog.defaultProps = {
  button: [],
  dialog: [],
};
