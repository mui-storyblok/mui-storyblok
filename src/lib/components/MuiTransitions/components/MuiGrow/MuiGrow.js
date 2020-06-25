import React from 'react';
import PropTypes from 'prop-types';
import { Grow } from '@material-ui/core';
import useTransitionIn from '../../customHooks/useTransitionIn';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';
import { validComponentsRequired } from '../../../../utils/customProps';

const MuiGrow = ({
  rootClass,
  content,
  growIn,
  enter,
  exit,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const transTime = useTransitionIn(growIn);

  let enterTime;
  if (enter === '0') {
    enterTime = 'auto';
  } else {
    enterTime = { enter: +enter, exit: +exit };
  }

  return (
    <div className={styles.root}>
      <Grow
        in={transTime}
        timeout={enterTime}
      >
        <div>
          {content.map((item, index) => (
            <Blok {...item} key={index} />
          ))}
        </div>
      </Grow>
    </div>
  );
};

export default MuiGrow;

MuiGrow.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: number
   * Number of milliseconds for component to transition in.
   */
  growIn: PropTypes.string,
  /**
   * mui props: number
   * Duration in milliseconds to enter the screen.
   */
  enter: PropTypes.string,
  /**
   * mui props: number
   * Duration in milliseconds to leave the screen.
   */
  exit: PropTypes.string,
  /**
   * Content passed to render
   * components: Blok
   */
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['Blok'], 1);
  },
};

MuiGrow.defaultProps = {
  growIn: 300,
  enter: 1500,
  exit: 1500,
  rootClass: [],
  content: [],
};
