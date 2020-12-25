import React from 'react';
import PropTypes from 'prop-types';
import Storyblok from 'lib/utils/Storyblok';

export const Divider = ({
  width,
  dataBlokC,
  dataBlokUid,
  thickness,
  lineStyle,
  color,
  borderRadius,
  preSetStyle,
  rootClass,
  lineHeight,
}) => {
  const border = thickness.concat(' ', lineStyle, ' ', color);
  const customStyles = Storyblok.anchorOrginToObj(rootClass);
  const backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0), ${color}, rgba(0, 0, 0, 0))`;
  let styles;
  if (preSetStyle === 'fadeInOut') {
    styles = {
      border: 0,
      backgroundImage,
      height: thickness,
      width,
    };
  } else {
    styles = {
      border,
      width,
      borderRadius,
      lineHeight,
      ...customStyles,
      backgroundImage: preSetStyle ? backgroundImage : '',
    };
  }

  return (
    <hr
      style={styles}
      dataBlokC={dataBlokC}
      dataBlokUid={dataBlokUid}
      id="hrDivider"
    />
  );
};

export default Divider;

Divider.propTypes = {
  rootClass: PropTypes.arrayOf(PropTypes.string),
  width: PropTypes.string,
  thickness: PropTypes.string,
  lineStyle: PropTypes.string,
  lineHeight: PropTypes.string,
  color: PropTypes.string,
  borderRadius: PropTypes.string,
  preSetStyle: PropTypes.string,
  dataBlokC: PropTypes.string,
  dataBlokUid: PropTypes.string,
};

Divider.defaultProps = {
  rootClass: [],
  width: '100%',
  dataBlokC: '',
  dataBlokUid: '',
  thickness: '.7px',
  lineStyle: 'solid',
  color: '#000',
  borderRadius: '1px',
  preSetStyle: '',
  lineHeight: '1.2',
};
