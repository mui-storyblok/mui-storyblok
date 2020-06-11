import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Storyblok from '../../utils/Storyblok';

/**
 * MuiLink is used in storyblok redirect to a href
 */

export const MuiLink = ({
  text,
  color,
  href,
  underline,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const onClick = () => {
    window.location.replace(href);
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
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'initial' | 'inherit' | 'primary' | 'secondary' | 'textPrimary' | 'textSecondary' | 'error'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /*
  * mui prop:'none' | 'hover' | 'always'
  * underline text
  */
  underline: PropTypes.string,
  /* url for redirect */
  href: PropTypes.string.isRequired,
  /* text to click on */
  text: PropTypes.string.isRequired,
};

MuiLink.defaultProps = {
  color: 'primary',
  underline: 'hover',
  rootClass: [],
};
