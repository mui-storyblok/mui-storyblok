import React, {
  createElement,
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import Storyblok from '../../utils/Storyblok';

const MuiDialog = lazy(() => import('../MuiDialog/MuiDialog'));
const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));

const MuiIconButtonDialog = ({
  color,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  rootClass,
  icon,
  dialog,
}) => {
  const components = {
    MuiDialog,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const [state, setState] = useState({ open: false });

  const toggleDialog = () => setState({ ...state, open: !state.open });

  const muiicon = icon[0];
  const muidialog = dialog[0];
  return (
    <IconButton
      onClick={toggleDialog}
      className={styles.root}
      color={color}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge === 'false' ? false : edge}
      size={size}
    >
      <Suspense fallback={<div />}>
        {muiicon ? createElement(components[muiicon.component], { ...muiicon }) : null}
        {
          muidialog
            ? createElement(
              components[muidialog.component],
              { ...muidialog, open: state.open, toggleDialog },
            )
            : null
        }
      </Suspense>
    </IconButton>
  );
};


export default MuiIconButtonDialog;

MuiIconButtonDialog.propTypes = {
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /* mui prop: true | false */
  disableFocusRipple: PropTypes.bool,
  /* mui prop: true | false */
  disableRipple: PropTypes.bool,
  /* mui prop: 'start' | 'end' | false */
  edge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** mui prop: 'small' | "medium" */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiDialog Allowed maximum: 1 */
  dialog: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiIcon Allowed maximum: 1 */
  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiIconButtonDialog.defaultProps = {
  color: 'default',
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: 'medium',
  rootClass: [],
};
