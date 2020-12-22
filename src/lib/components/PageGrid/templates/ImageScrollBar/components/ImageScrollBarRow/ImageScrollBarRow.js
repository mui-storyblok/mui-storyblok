/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import anime from 'animejs';

const imageStyles = {
  height: '120px',
  width: '107px',
  margin: '15px',
  willChange: 'transform',
};

export const ImageScrollBarRow = ({ images, windowWidth }) => {
  const setAnimeConfig = () => {
    const containerWidth = parseInt(getComputedStyle(document.getElementById('imageScrollBarContainer')).width, 10);
    const imageRowWidth = 123 * images.length;
    anime
      .timeline({
        loop: true,
        targets: '.scrollImage',
        easing: 'linear',
        translateX: `${-(imageRowWidth + 20)}px`,
        duration: 0,
      })
      .add({
        targets: '.imageScrollBarContainer',
        translateX: `${containerWidth + imageRowWidth}`,
        easing: 'linear',
        duration: images.length <= 5 ? 8000 : images.length * 900,
      });

    anime({
      targets: '.pulse',
      scale: [1, 1.05, 1],
      translateY: [0, 10, 0],
      loop: true,
      duration: 3000,
      easing: 'easeInOutQuad',
      delay: () => anime.random(0, 500),
    });
  };

  useEffect(() => {
    anime.remove('.imageScrollBarContainer .scrollImage');
    setAnimeConfig();
  }, [windowWidth]);

  return (
    images.map((image, i) => (
      <img src={image.image} alt={image.image} className="scrollImage pulse flow" style={imageStyles} key={i} />
    ))
  );
};

export default ImageScrollBarRow;

ImageScrollBarRow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape.isRequired).isRequired,
};
