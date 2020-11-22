import React from 'react';
import PropTypes from 'prop-types';
import StoryBlok from 'lib/utils/Storyblok';

const Image = ({
  hrefLink,
  imageStyle,
  image,
  rootClass,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = StoryBlok.anchorOrginToObj(rootClass);
  const imageStyles = StoryBlok.anchorOrginToObj(imageStyle);

  return (
    <div
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
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
    </div>
  );
};

export default Image;

Image.propTypes = {
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

Image.defaultProps = {
  imageStyle: [],
  rootClass: [],
  hrefLink: null,
};
