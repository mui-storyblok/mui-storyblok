import React from 'react';
import PropTypes from 'prop-types';
import StoryBlok from 'lib/utils/Storyblok';
import { dimensionProp } from 'lib/utils/customProps';

const Image = ({
  href,
  imageStyle,
  image,
  rootClass,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
  height,
  width,
}) => {
  const styles = StoryBlok.anchorOrginToObj(rootClass);
  const imageStyles = StoryBlok.anchorOrginToObj(imageStyle);

  return (
    <div
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      { href && (
      <a href={href} target="_self">
        <picture style={styles}>
          <img src={image} style={{ ...imageStyles, height, width }} alt={image} />
        </picture>
      </a>
      )}
      { !href && (
        <picture style={styles}>
          <img src={image} style={{ ...imageStyles, height, width }} alt={image} />
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
  href: PropTypes.string,

  /**
   * Height of the App Bar must use 'px', 'em', '%' 'vh', 'vw', as unit of measurement
   * */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },

  /**
   * 'px', 'em', '%' 'vh', 'vw', as unit of measurement
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },

  /**
   * Css Styles for the image.
   */
  imageStyle: PropTypes.arrayOf(PropTypes.string),
  /**
   * Css Styles for the image.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  dataBlokC: PropTypes.string,
  dataBlokUid: PropTypes.string,
  storyblokClass: PropTypes.string,
};

Image.defaultProps = {
  height: '500px',
  width: '500px',
  imageStyle: [],
  rootClass: [],
  href: null,
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
