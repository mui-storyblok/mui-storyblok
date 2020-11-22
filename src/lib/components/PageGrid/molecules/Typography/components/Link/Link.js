import React from 'react';
import PropTypes from 'prop-types';
import { Link as MuiLink } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { muiStringProp } from 'lib/utils/customProps';
import appRedirect from 'lib/utils/appRedirect';

/**
 * Link is used in storyblok redirect to a href
 */

export const Link = ({
  text,
  color,
  href,
  underline,
  rootClass,
  external,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const externalRedirect = () => {
    window.location.replace(href);
  };

  const internalRedirect = () => {
    appRedirect(href);
  };

  const onClick = () => {
    if (external) {
      return externalRedirect();
    }
    return internalRedirect(href);
  };

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <MuiLink
      className={styles.root}
      color={color}
      underline={underline}
      href="#"
      onClick={onClick}
    >
      {text}
    </MuiLink>
  );
};

export default Link;

Link.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop:
   'initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color(props, propName, componentName) {
    const validProps = ['initial', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary', 'error'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /*
  * mui prop:'none', 'hover', 'always'
  * underline text
  */
  underline(props, propName, componentName) {
    const validProps = ['none', 'hover', 'always'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /* url for redirect */
  href: PropTypes.string.isRequired,
  /* text to click on */
  text: PropTypes.string.isRequired,

  /**
   * if false will redirect to a page in the app and should use '/page-whatever'
   *
   *  if true will redirect to another site 'https://www.google.com/'
   * */
  external: PropTypes.bool,
};

Link.defaultProps = {
  color: 'primary',
  underline: 'hover',
  rootClass: [],
  external: false,
};
