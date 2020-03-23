import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Grid';
import Storyblok from '../utils/Storyblok';

const MuiCardActions = lazy(() => import('./components/MuiCardActions/MuiCardActions'));
const MuiCardContent = lazy(() => import('./components/MuiCardContent/MuiCardContent'));
const MuiCardHeader = lazy(() => import('./components/MuiCardHeader/MuiCardHeader'));
const MuiCardMedia = lazy(() => import('./components/MuiCardMedia/MuiCardMedia'));

const MuiCard = ({ rootClass, raised, content }) => {
  const components = {
    MuiCardActions,
    MuiCardContent,
    MuiCardHeader,
    MuiCardMedia,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <Card
      className={styles.root}
      raised={raised.toString()}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
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
};
