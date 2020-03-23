import React, {
  createElement,
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';

const MuiButton = lazy(() => import('../MuiButton/MuiButton'));
const MuiDialog = lazy(() => import('../MuiDialog/MuiDialog'));

/**
 * MuiButtonDialog controls Dialog open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/
 * Uses MuiButton and MuiDialog
 */

export const MuiButtonDialog = ({
  dialog,
  button,
}) => {
  const components = {
    MuiDialog,
    MuiButton,
  };

  const [state, setState] = useState({ open: false });
  const toggleDialog = () => setState({ ...state, open: !state.open });
  const muidialog = dialog[0];
  const muibutton = button[0];

  return (
    <Suspense fallback={<div />}>
      {
      muibutton
        ? createElement(
          components[muibutton.component],
          { ...muibutton, onClick: toggleDialog },
        )
        : null
    }
      {
      muidialog
        ? createElement(
          components[muidialog.component],
          { ...muidialog, open: state.open, toggleDialog },
        )
        : null
    }
    </Suspense>
  );
};

export default MuiButtonDialog;

MuiButtonDialog.propTypes = {
  /** MuiButton Allowed maximum: 1 */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiDialog Allowed maximum: 1 */
  dialog: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

};

MuiButtonDialog.defaultProps = {};
