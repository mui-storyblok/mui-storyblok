import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Storyblok from '../../../utils/Storyblok';

/**
 * MuiLink is used in storyblok redirect to react routes
 */

export const MuiLink = ({
  text,
  color,
  herf,
  underline,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = () => {
    window.location.replace(herf);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link
      className={styles.root}
      color={color}
      underline={underline}
      href="#"
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default MuiLink;

MuiLink.propTypes = {
  /* mui prop: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error' */
  color: PropTypes.string,
  /* mui prop:'none' | 'hover' | 'always' */
  underline: PropTypes.string,
  /* url for redirect */
  herf: PropTypes.string.isRequired,
  /* text to click on */
  text: PropTypes.string.isRequired,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiLink.defaultProps = {
  color: 'primary',
  underline: 'hover',
  rootClass: [],
};
