import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Fade } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import MuiGridList from '../../../MuiGridList/MuiGridList';

const MuiFade = ({
  rootClass,
  content,
  fadeIn,
  timeout,
}) => {
  const components = {
    MuiGridList,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <div className={styles.root}>
      <Fade
        in={fadeIn}
        timeout={timeout}
      >
        <div>
          {content.map((item, index) => createElement(
            components[item.component],
            Object.assign(item, { key: index }),
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
   * mui props: bool
   * If true, the component will transition in.
   */
  fadeIn: PropTypes.bool,
  /**
   * mui props: number | string
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiGridList
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiFade.defaultProps = {
  fadeIn: true,
  timeout: 'auto',
  rootClass: [],
};
