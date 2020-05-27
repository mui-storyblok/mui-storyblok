import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import StoryBlok from '../../utils/Storyblok';
import MuiCollapse from './components/MuiCollapse/MuiCollapse';
import MuiGrow from './components/MuiGrow/MuiGrow';
import MuiFade from './components/MuiFade/MuiFade';
import MuiZoom from './components/MuiZoom/MuiZoom';
import MuiSlide from './components/MuiSlide/MuiSlide';

const MuiTransitions = ({
  content,
  rootClass,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const components = {
    MuiCollapse,
    MuiFade,
    MuiGrow,
    MuiZoom,
    MuiSlide,
  };

  return (
    <div className={styles.root}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </div>
  );
};

export default MuiTransitions;

MuiTransitions.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Content passed to render
   * components:
   * MuiCollapse,
   * MuiFade,
   * MuiGrow,
   * MuiZoom,
   * MuiSlide,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTransitions.defaultProps = {
  rootClass: [],
};
