import React from 'react';
import PropTypes from 'prop-types';
import CardMedia from '@material-ui/core/CardMedia';
import Storyblok from '../../../../utils/Storyblok';

/**
 * MuiCardMedia is used in storyblok redirect to react routes
 */

export const MuiCardMedia = ({
  rootClass,
  alt,
  height,
  image,
  title,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height });

  return (
    <CardMedia
      className={styles.root}
      alt={alt}
      image={image}
      title={title}
    />
  );
};

export default MuiCardMedia;

MuiCardMedia.propTypes = {
  /** 
   * height is requred for media to display
   * value in px
   */
  height: PropTypes.string,
  /** alt text for image */
  alt: PropTypes.string.isRequired,
  /** title text for image */
  title: PropTypes.string.isRequired,
  /**
   * url for image
   * Image to be displayed as a background image
   * */
  image: PropTypes.string.isRequired,
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiCardMedia.defaultProps = {
  rootClass: [],
  height: '140px',
};
