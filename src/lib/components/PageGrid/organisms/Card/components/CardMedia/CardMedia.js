import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia as MuiCardMedia } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { dimensionProp } from 'lib/utils/customProps';

/**
 * CardMedia is used in storyblok redirect to react routes
 */

export const CardMedia = ({
  rootClass,
  alt,
  height,
  image,
  title,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height });

  return (
    <MuiCardMedia
      className={styles.root}
      alt={alt}
      image={image}
      title={title}
    />
  );
};

export default CardMedia;

CardMedia.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * height is requred for media to display
   * value in px
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /** alt text for image */
  alt: PropTypes.string.isRequired,
  /** title text for image */
  title: PropTypes.string.isRequired,
  /**
   * url for image
   * Image to be displayed as a background image
   * */
  image: PropTypes.string.isRequired,
};

CardMedia.defaultProps = {
  rootClass: [],
  height: '140px',
};
