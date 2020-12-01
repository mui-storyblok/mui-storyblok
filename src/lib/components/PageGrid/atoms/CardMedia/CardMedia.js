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
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  style,
  classes,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { ...style, height });
  return (
    <MuiCardMedia
      alt={alt}
      image={image}
      title={title}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
      classes={classes}
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
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,

  classes: PropTypes.shape()
};

CardMedia.defaultProps = {
  rootClass: [],
  height: '140px',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  classes: {},
};
