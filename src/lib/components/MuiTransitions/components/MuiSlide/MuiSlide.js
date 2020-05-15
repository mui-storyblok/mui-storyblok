import React from 'react';
import PropTypes from 'prop-types';
import { Slide } from '@material-ui/core';
import useTransitionIn from '../../customHooks/useTransitionIn';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiSlide = ({
  rootClass,
  direction,
  content,
  slideIn,
  enter,
  exit,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const transTime = useTransitionIn(slideIn);

  return (
    <div className={styles.root}>
      <Slide
        in={transTime}
        timeout={{
          enter: +enter,
          exit: +exit,
        }}
        direction={direction}
      >
        <div>
          {content.map((item, index) => (
            <Blok {...item} key={index} />
          ))}
        </div>
      </Slide>
    </div>
  );
};

export default MuiSlide;

MuiSlide.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: number
   * Number of milliseconds for component to transition in.
   */
  slideIn: PropTypes.string,
  /**
   * mui props: 'down' | 'left' | 'right' | 'up'
   * Direction the child node will enter from.
   */
  direction: PropTypes.string,
  /**
   * mui props: number
   * Duration in milliseconds to enter the screen.
   */
  enter: PropTypes.string,
  /**
   * mui props: number
   * Duration in milliseconds to exit the screen.
   */
  exit: PropTypes.string,
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

MuiSlide.defaultProps = {
  slideIn: 300,
  direction: 'down',
  timeout: 'auto',
  enter: 800,
  exit: 800,
  rootClass: [],
};
