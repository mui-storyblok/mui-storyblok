/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageScrollBarRow } from './components/ImageScrollBarRow/ImageScrollBarRow';

const scrollbarContainerStyles = {
  width: '100vw',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  overflowY: 'visible',
};

export const ImageScrollBar = ({
  imageScrollBarRow,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  return (
    <div className="imageScrollBarContainer" style={scrollbarContainerStyles} id="imageScrollBarContainer">
      {
        imageScrollBarRow.map(row => (
          <ImageScrollBarRow images={row.images} windowWidth={windowWidth} />
        ))
      }
    </div>
  );
};

export default ImageScrollBar;

ImageScrollBar.propTypes = {
  imageScrollBarRow: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  imageShape: PropTypes.string,
  height: PropTypes.string,
};

ImageScrollBar.defaultProps = {
  imageShape: 'hexagon',
  height: '120px',
};
