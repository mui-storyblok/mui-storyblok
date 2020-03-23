import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../../../utils/Storyblok';
import CardActions from '@material-ui/core/CardActions';

const MuiButtonRedirect = lazy(() => import('../../../MuiButtonRedirect/MuiButtonRedirect'));
const MuiMenu = lazy(() => import('../../../MuiMenu/MuiMenu'));

const MuiCardActions = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiButtonRedirect,
    MuiMenu,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardActions
      className={styles.root}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </CardActions>
  );
};

export default MuiCardActions;

MuiCardActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCardActions.defaultProps = {
  rootClass: [],
};
