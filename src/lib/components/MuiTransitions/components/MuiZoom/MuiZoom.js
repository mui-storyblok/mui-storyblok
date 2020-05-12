import React from 'react';
import PropTypes from 'prop-types';
import { Zoom } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiZoom = ({
  rootClass,
  content,
  zoomIn,
  timeout,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <div className={styles.root}>
      <Zoom
        in={zoomIn}
        timeout={timeout}
      >
        <div>
          {content.map((item, index) => (
            <Blok {...item} key={index} />
          ))}
        </div>
      </Zoom>
    </div>
  );
};

export default MuiZoom;

MuiZoom.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: bool
   * If true, the component will transition in.
   */
  zoomIn: PropTypes.bool,
  /**
   * mui props: number | string
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: PropTypes.string,
  /**
   * Content passed to render
   * components: Blok
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiZoom.defaultProps = {
  zoomIn: true,
  timeout: 'auto',
  rootClass: [],
};
