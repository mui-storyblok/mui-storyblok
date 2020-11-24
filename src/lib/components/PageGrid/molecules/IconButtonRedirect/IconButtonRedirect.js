import React from 'react';
import PropTypes from 'prop-types';
import { validComponentsRequired } from 'lib/utils/customProps';
import appRedirect from 'lib/utils/appRedirect';
import IconButton from '../IconButton/IconButton';

/**
 * IconButtonRedirect is used in storyblok redirect to react routes
 */

export const IconButtonRedirect = ({
  href,
  iconButton,
  external,
  callback,
}) => {
  const externalRedirect = () => {
    window.location.replace(href);
  };

  const internalRedirect = () => {
    appRedirect(href);
  };

  const onClick = () => {
    if (callback) callback();
    if (external) {
      return externalRedirect();
    }
    return internalRedirect(href);
  };

  const btn = iconButton[0];

  return (
    <IconButton
      {...btn}
      onClick={onClick}
    />
  );
};

export default IconButtonRedirect;

IconButtonRedirect.propTypes = {
  /** redirect route */
  href: PropTypes.string.isRequired,
  /** IconButton Allowed maximum: 1 */
  iconButton(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['IconButton'], 1);
  },
  /**
   * If checked you will be directed to another website (ex: ‘https://google.com’)
   *  If unchecked you will be directed to a page on your site (ex: ‘.page-welcome’)
   * */
  external: PropTypes.bool,
  // callback to run before redirect
  callback: PropTypes.func,

};

IconButtonRedirect.defaultProps = {
  iconButton: [],
  callback: undefined,
  external: false,
};
