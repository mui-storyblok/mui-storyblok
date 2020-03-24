import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import Storyblok from '../../../../../../utils/Storyblok';

/**
 * MuiListItemText is used in storyblok redirect to react routes
 */

export const MuiListItemText = ({
  secondary,
  primary,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemText
      className={styles.root}
      primary={primary}
      secondary={secondary}
    />
  );
};

export default MuiListItemText;

MuiListItemText.propTypes = {
  /** primary text */
  primary: PropTypes.string.isRequired,
  /** secondary text */
  secondary: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiListItemText.defaultProps = {
  rootClass: [],
  secondary: '',
};
