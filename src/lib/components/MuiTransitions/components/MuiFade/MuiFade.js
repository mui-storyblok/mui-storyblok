import React from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import useTransitionIn from '../../customHooks/useTransitionIn';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiFade = ({
  rootClass,
  content,
  fadeIn,
  enter,
  exit,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const transTime = useTransitionIn(fadeIn);

  return (
    <div className={styles.root}>
      <Fade
        in={transTime}
        timeout={{
          enter: +enter,
          exit: +exit,
        }}
      >
        <div>
          {content.map((item, index) => (
            <Blok {...item} key={index} />
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default MuiFade;

MuiFade.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: number
   * Number of milliseconds for component to transition in.
   */
  fadeIn: PropTypes.string,
  /**
   * mui props: number
   * Number of milliseconds for component to effect on screen.
   */
  enter: PropTypes.string,
  /**
   * mui props: number
   * Number of milliseconds for component to effect off screen.
   */
  exit: PropTypes.string,
  /**
   * Content passed to render
   * components: Blok
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiFade.defaultProps = {
  fadeIn: 300,
  enter: 1500,
  exit: 1500,
  rootClass: [],
};
