import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grow } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiGrow = ({
  rootClass,
  content,
  growIn,
  timeout,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(prev => !prev);
    }, +growIn);
  }, []);

  return (
    <div className={styles.root}>
      <Grow
        in={checked}
        timeout={timeout}
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

MuiGrow.defaultProps = {
  growIn: 300,
  timeout: 'auto',
  rootClass: [],
};
