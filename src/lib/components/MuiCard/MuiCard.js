import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { Card } from '@material-ui/core';
import Storyblok from '../../utils/Storyblok';
import {
  validComponents,
  dimensionProp,
} from '../../utils/customProps';
import MuiCardActions from './components/MuiCardActions/MuiCardActions';
import MuiCardContent from './components/MuiCardContent/MuiCardContent';
import MuiCardHeader from './components/MuiCardHeader/MuiCardHeader';
import MuiCardMedia from './components/MuiCardMedia/MuiCardMedia';
import MuiVideo from '../MuiVideo/MuiVideo';

const MuiCard = ({
  rootClass,
  raised,
  content,
  elevation,
  square,
  variant,
  height,
  width,
}) => {
  const components = {
    MuiCardActions,
    MuiCardContent,
    MuiCardHeader,
    MuiCardMedia,
    MuiVideo,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height, width });
  return (
    <Card
      className={styles.root}
      raised={raised}
      variant={variant}
      elevation={+elevation}
      square={square}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </Card>
  );
};

export default MuiCard;

MuiCard.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the card will use raised styling.
   */
  raised: PropTypes.bool,
  /**
   * It accepts values between 0 and 24 inclusive.
   * Shadow depth, corresponds to dp in the spec.
   */
  elevation: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * mui prop: 'elevation' | 'outlined'
   * The variant to use.
   */
  variant: PropTypes.string,
  /**
   * Height of the card.
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Width of the card.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },

  /**
   * Content passed to render
   * components:  MuiCardActions,
    MuiCardContent,
    MuiCardHeader,
    MuiCardMedia,
   */
  content(props, propName, componentName) {
    const components = [
      'MuiCardActions',
      'MuiCardContent',
      'MuiCardHeader',
      'MuiCardMedia',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiCard.defaultProps = {
  raised: false,
  rootClass: [],
  height: '100%',
  width: '100%',
  content: [],
  elevation: 1,
  square: false,
  variant: 'elevation',
};
