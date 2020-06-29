import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import Storyblok from '../../../../utils/Storyblok';
import appRedirect from '../../../../utils/appRedirect';

const MuiMenuItem = ({
  redirectRoute,
  buttonText,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const redirect = () => appRedirect(redirectRoute);

  return (
    <MenuItem
      className={styles.root}
      onClick={redirect}
    >
      {buttonText}
    </MenuItem>
  );
};

export default MuiMenuItem;

MuiMenuItem.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
};

MuiMenuItem.defaultProps = {
  rootClass: [],
};
