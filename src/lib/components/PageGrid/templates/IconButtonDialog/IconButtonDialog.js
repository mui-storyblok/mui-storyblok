import React, { useState } from 'react';
import { validComponentsRequired } from 'lib/utils/customProps';
import Dialog from 'lib/components/PageGrid/organisms//Dialog/Dialog';
import IconButton from 'lib/components/PageGrid/molecules/IconButton/IconButton';

const IconButtonDialog = ({
  dialog,
  iconButton,
}) => {
  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });

  return (
    <>
      <IconButton
        {...iconButton[0]}
        onClick={toggleDialog}
      />
      <Dialog
        {...dialog[0]}
        open={state.open}
        toggleDialog={toggleDialog}
      />
    </>
  );
};

export default IconButtonDialog;

IconButtonDialog.propTypes = {
  /** Dialog Allowed maximum: 1 */
  dialog(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['Dialog'], 1);
  },
  /** IconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['IconButton'], 1);
  },
};

IconButtonDialog.defaultProps = {
  dialog: [],
  iconButton: [],
};
