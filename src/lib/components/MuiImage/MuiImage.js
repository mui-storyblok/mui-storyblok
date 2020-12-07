import React from 'react';
import PropTypes from 'prop-types';
import StoryBlok from '../../utils/Storyblok';

const MuiImage = ({
  hrefLink,
  imageStyle,
  image,
  rootClass,
  height,
  width,
}) => {
  const styles = StoryBlok.anchorOrginToObj(rootClass);
  const imageStyles = StoryBlok.anchorOrginToObj(imageStyle);

  return (
    <>
      { hrefLink && (
      <a href={hrefLink} target="_self">
        <picture style={styles}>
          <img src={image} style={imageStyles} alt={image} />
        </picture>
      </a>
      )}
      { !hrefLink && (
        <picture style={styles}>
          <img src={image} style={imageStyles} alt={image} />
        </picture>
      )}
    </>
  );
};

export default MuiImage;

MuiImage.propTypes = {
  /**
   * Url for image to be displayed.
   */
  image: PropTypes.string.isRequired,
  /**
   * Url for image to be displayed.
   */
  hrefLink: PropTypes.string,
  /**
   * Css Styles for the image.
   */
  imageStyle: PropTypes.arrayOf(PropTypes.string),
  /**
   * Css Styles for the image.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiImage.defaultProps = {
  imageStyle: [],
  rootClass: [],
  hrefLink: null,
};
