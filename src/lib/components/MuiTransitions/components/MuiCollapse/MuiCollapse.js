import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import Blok from '../../../StoryBlokPage/components/Blok/Blok';

const MuiCollapse = ({
  rootClass,
  collapsedHeight,
  transitionIn,
  timeOut,
  content,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setChecked(prev => !prev);
    }, +transitionIn);
  }, []);

  return (
    <div className={styles.root}>
      <Collapse
        collapsedHeight={collapsedHeight}
        in={checked}
        timeOut={timeOut}
      >
        {content.map((item, index) => (
          <Blok {...item} key={index} />
        ))}
      </Collapse>
    </div>
  );
};

export default MuiCollapse;

MuiCollapse.propTypes = {
  /**
   * storyyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: number | string
   * The height of the container when collapsed.
   */
  collapsedHeight: PropTypes.string,
  /**
   * mui props: number | string
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeOut: PropTypes.string,
  /**
   * mui props: number
   * Number of milliseconds for component to transition in.
   */
  transitionIn: PropTypes.string,
  /**
   * Content passed to render
   * components: Blok
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCollapse.defaultProps = {
  collapsedHeight: '0px',
  timeOut: 'auto',
  transitionIn: 300,
  rootClass: [],
};
