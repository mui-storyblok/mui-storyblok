import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'material-ui-audio-player';
import {
  dimensionProp,
  muiStringProp,
  muiBlokNumberProp,
} from 'lib/utils/customProps';

/**
 * https://www.npmjs.com/package/material-ui-audio-player
 */

const MuiAudioPlayer = ({
  src,
  width,
  variation,
  download,
  autoplay,
  elevation,
  rounded,
  spacing,
  order,
  loop,
  preload,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => (
  <AudioPlayer
    src={src}
    width={width}
    variation={variation}
    download={download}
    autoplay={autoplay}
    elevation={elevation}
    rounded={rounded}
    spacing={spacing}
    order={order}
    loop={loop}
    preload={preload}
    className={storyblokClass}
    data-blok-c={dataBlokC}
    data-blok-uid={dataBlokUid}
  />
);

export default MuiAudioPlayer;

MuiAudioPlayer.propTypes = {
  /**
     * Could accept audio link or array of audio links.
     */
  src: PropTypes.string.isRequired,
  /**
   * Corresponds to style property width.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Component view variation.
   * options: default, primary, secondary
   */
  variation(props, propName, componentName) {
    const validProp = ['default', 'primary', 'secondary'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * Display download button (icon) with dropdown of available audio tracks for download.
   */
  download: PropTypes.bool,
  /**
   * Display download button (icon) with dropdown of available audio tracks for download.

   */
  autoplay: PropTypes.bool,
  /**
     * Shadow depth. Corresponds to elevation prop of Material Ui Paper component.
     */
  elevation: PropTypes.number,
  /**
   * Rounded corners of the container. Corresponds to square prop of Material Ui Paper component.
   */
  rounded: PropTypes.bool,
  /**
   * Spacing for root Grid container. Corresponds to spacing prop of Material Ui Grid component.
   */
  spacing(props, propName, componentName) {
    const validProps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return muiBlokNumberProp(props, propName, componentName, validProps);
  },
  /**
   * Order of Slider and controls buttons.
    * options: standart, reverse
   */
  order(props, propName, componentName) {
    const validProp = ['standart', 'reverse'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * Display loop button.
   */
  loop: PropTypes.bool,
  /**
 * Corresponds to HTML audio attribute preload.
 * options auto|metadata|none
 */
  preload(props, propName, componentName) {
    const validProp = ['auto', 'metadata', 'none'];
    return muiStringProp(props, propName, componentName, validProp);
  },

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

MuiAudioPlayer.defaultProps = {
  width: '100%',
  variation: 'default',
  download: false,
  autoplay: false,
  elevation: 1,
  rounded: false,
  spacing: 3,
  loop: false,
  order: 'standart',
  preload: 'none',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
