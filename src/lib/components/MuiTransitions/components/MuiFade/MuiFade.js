import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiFade = ({
  rootClass,
  content,
  fadeIn,
  timeout,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(prev => !prev);
    }, +fadeIn);
  }, []);

  return (
    <div className={styles.root}>
      <Fade
        in={checked}
        timeout={timeout}
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

MuiFade.defaultProps = {
  fadeIn: 300,
  timeout: 'auto',
  rootClass: [],
};
