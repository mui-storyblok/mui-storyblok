import React from 'react';
import PropTypes from 'prop-types';
import { ListItemText as MuiListItemText } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';

/**
 * MuiListItemText is used in storyblok redirect to react routes
 */

export const ListItemText = ({
  secondary,
  primary,
  rootClass,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiListItemText
      className={`${styles.root} ${storyblokClass}`}
      primary={primary}
      secondary={secondary}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    />
  );
};

export default ListItemText;

ListItemText.propTypes = {
  /** primary text */
  primary: PropTypes.string.isRequired,
  /** secondary text */
  secondary: PropTypes.string,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

ListItemText.defaultProps = {
  rootClass: [],
  secondary: '',
};
