import React, { useState } from 'react';
import { validComponentsRequired } from '../../utils/customProps';
import MuiDialog from '../MuiDialog/MuiDialog';
import MuiIconButton from '../MuiIconButton/MuiIconButton';

const MuiIconButtonDialog = ({
  dialog,
  iconButton,
}) => {
  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });

  const muiIconButton = iconButton[0];
  const muiDialog = dialog[0];
  return (
    <>
      <MuiIconButton
        {...muiIconButton}
        onClick={toggleDialog}
      />
      <MuiDialog
        {...muiDialog}
        open={state.open}
        toggleDialog={toggleDialog}
      />
    </>
  );
};

export default MuiIconButtonDialog;

MuiIconButtonDialog.propTypes = {
  /** MuiDialog Allowed maximum: 1 */
  dialog(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiDialog'], 1);
  },
  /** MuiIconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIconButton'], 1);
  },
};

MuiIconButtonDialog.defaultProps = {
  dialog: [],
  iconButton: [],
};
