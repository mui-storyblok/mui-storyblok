import React, { useState } from 'react';
import PropTypes from 'prop-types';

import MuiDialog from 'lib/components/MuiDialog/MuiDialog';
import MuiIconButton from 'lib/components/MuiIconButton/MuiIconButton';

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
  dialog: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiIconButton Allowed maximum: 1 */
  iconButton: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiIconButtonDialog.defaultProps = {};
