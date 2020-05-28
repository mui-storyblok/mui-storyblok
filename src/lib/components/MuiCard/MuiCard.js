import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';

import MuiCardActions from './components/MuiCardActions/MuiCardActions';
import MuiCardContent from './components/MuiCardContent/MuiCardContent';
import MuiCardHeader from './components/MuiCardHeader/MuiCardHeader';
import MuiCardMedia from './components/MuiCardMedia/MuiCardMedia';
import MuiVideo from '../MuiVideo/MuiVideo';

const MuiCard = ({
  rootClass,
  raised,
  content,
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
      raised={raised.toString()}
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
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  // mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  /**
   * mui prop: true | false
   * If true, the card will use raised styling.
   */
  raised: PropTypes.bool,
  /**
   * Height of the card.
   */
  height: PropTypes.string,
  /**
   * Width of the card.
   */
  width: PropTypes.string,

  /**
   * Content passed to render
   * components:  MuiCardActions,
    MuiCardContent,
    MuiCardHeader,
    MuiCardMedia,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCard.defaultProps = {
  raised: false,
  rootClass: [],
  height: '100%',
  width: '100%',
};
