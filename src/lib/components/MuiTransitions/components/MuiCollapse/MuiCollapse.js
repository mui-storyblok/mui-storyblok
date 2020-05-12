import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import MuiGridList from '../../../MuiGridList/MuiGridList';

const MuiCollapse = ({
  rootClass,
  collapsedHeight,
  transitionIn,
  timeOut,
  content,
}) => {
  const components = {
    MuiGridList,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <div className={styles.root}>
      <Collapse
        collapsedHeight={collapsedHeight}
        in={transitionIn}
        timeOut={timeOut}
      >
        <div>
          {content.map((item, index) => createElement(
            components[item.component],
            Object.assign(item, { key: index }),
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default MuiCollapse;

MuiCollapse.propTypes = {
  /**
   * stroyblok multiselect of css classes
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
   * mui props: bool
   * If true, the component will transition in.
   */
  transitionIn: PropTypes.bool,
  /**
   * Content passed to render
   * components: MuiGridList
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCollapse.defaultProps = {
  collapsedHeight: '0px',
  timeOut: 'auto',
  transitionIn: true,
  rootClass: [],
};
