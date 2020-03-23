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
  // mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  raised: PropTypes.bool,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCard.defaultProps = {
  raised: false,
  rootClass: [],
};
