import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

const MuiGrid = lazy(() => import('../../../MuiGrid/MuiGrid'));
const MuiHeroHeader = lazy(() => import('../../../MuiHeroHeader/MuiHeroHeader'));
const MuiAppBar = lazy(() => import('../../../MuiAppBar/MuiAppBar'));

const components = {
  MuiGrid,
  MuiHeroHeader,
  MuiAppBar,
};

export const Block = ({
  content,
  only,
}) => (
  <Hidden only={only}>
    <Suspense fallback={<div />}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))
      }
    </Suspense>
  </Hidden>
);

export default Block;

Block.propTypes = {
  /* mui prop array of: 'xs' | 'sm' | 'md' | 'lg' | 'xl'   */
  only: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

Block.defaultProps = {
  only: [],
};
