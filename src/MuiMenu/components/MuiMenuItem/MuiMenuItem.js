import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { withRouter } from 'react-router-dom';
import Storyblok from '../../../utils/Storyblok';

const MuiMenuItem = ({
  redirectRoute,
  buttonText,
  history,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const redirect = async () => {
    return history.push(redirectRoute);
  };

  return (
    <MenuItem
      className={styles.root}
      onClick={redirect}
    >
      {buttonText}
    </MenuItem>
  );
};

export default withRouter(MuiMenuItem);


MuiMenuItem.propTypes = {
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** react prop not used in storyblok */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

MuiMenuItem.defaultProps = {
  rootClass: [],
};
