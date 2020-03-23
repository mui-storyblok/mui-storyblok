import React, {
  createElement,
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../utils/Storyblok';
import Button from '@material-ui/core/Button';

const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));
const MuiDialog = lazy(() => import('..//MuiDialog/MuiDialog'));

/**
 * MuiButtonDialog controls Dialog open state from true to false.
 * More docs and demos at https://material-ui.com/api/button/ and https://material-ui.com/api/dialog/
 */

export const MuiButtonDialog = ({
  buttonText,
  variant,
  color,
  size,
  rootClass,
  startIcon,
  endIcon,
  dialog,
}) => {
  const components = {
    MuiDialog,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const [state, setState] = useState({ open: false });

  const toggleDialog = () => setState({ ...state, open: !state.open });

  const muidialog = dialog[0];
  return (
    <Button
      className={styles.root}
      variant={variant}
      color={color}
      size={size}
      onClick={toggleDialog}
      startIcon={startIcon ? (
        <Suspense fallback={<div />}>
          <MuiIcon iconName={startIcon} />
        </Suspense>
      ) : null}
      endIcon={endIcon ? (
        <Suspense fallback={<div />}>
          <MuiIcon iconName={endIcon} />
        </Suspense>
      ) : null}
    >
      {buttonText}
      <Suspense fallback={<div />}>
        {
          muidialog
            ? createElement(
              components[muidialog.component],
              { ...muidialog, open: state.open, toggleDialog },
            )
            : null
        }
      </Suspense>
    </Button>
  );
};

export default MuiButtonDialog;

MuiButtonDialog.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /** mui prop: 'small'| 'medium'| 'large' */
  size: PropTypes.string,
  /** mui prop: 'text' |'outlined'| 'contained */
  variant: PropTypes.string,
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /** name of Icon  */
  startIcon: PropTypes.string,
  /** name of Icon */
  endIcon: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiDialog Allowed maximum: 1 */
  dialog: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

};

MuiButtonDialog.defaultProps = {
  startIcon: null,
  endIcon: null,
  rootClass: [],
  variant: 'text',
  color: 'secondary',
  size: 'medium',
};
