import React from 'react';
import PropTypes from 'prop-types';
import StoryBlok from '../../utils/Storyblok';
import MuiCollapse from './components/MuiCollapse/MuiCollapse';
import MuiGrow from './components/MuiGrow/MuiGrow';
import MuiFade from './components/MuiFade/MuiFade';
import MuiZoom from './components/MuiZoom/MuiZoom';
import MuiSlide from './components/MuiSlide/MuiSlide';
import { validComponentsRequired } from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';

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
      {content.map((component, key) => renderComponents(components, component, key)) }
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
  content(props, propName, componentName) {
    const validComponents = ['MuiCollapse', 'MuiFade', 'MuiGrow', 'MuiZoom', 'MuiSlide'];
    return validComponentsRequired(props, propName, componentName, validComponents, 1);
  },
};

MuiTransitions.defaultProps = {
  rootClass: [],
  content: [],
};
