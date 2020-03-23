import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../utils/Storyblok';

const MuiGridItem = lazy(() => import('./components/MuiGridItem/MuiGridItem'));
const MuiAppBar = lazy(() => import('../MuiAppBar/MuiAppBar'));


export const sizeGrid = (value) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === 'auto') return value;
  return Number(value);
};

const MuiGrid = ({
  content,
  direction,
  justify,
  alignItems,
  xl,
  lg,
  md,
  sm,
  xs,
  spacing,
  rootClass,
}) => {
  const components = {
    MuiGridItem,
    MuiAppBar,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px' });

  return (
    <Grid
      className={styles.root}
      container
      item
      direction={direction}
      justify={justify}
      alignItems={alignItems}
      spacing={Number(spacing)}
      xl={sizeGrid(xl)}
      lg={sizeGrid(lg)}
      md={sizeGrid(md)}
      sm={sizeGrid(sm)}
      xs={sizeGrid(xs)}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index, sizeGrid }),
        ))}
      </Suspense>
    </Grid>
  );
};

export default MuiGrid;

MuiGrid.propTypes = {
  // mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  direction: PropTypes.string,
  // mui prop: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
  justify: PropTypes.string,
  // mui prop: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
  alignItems: PropTypes.string,
  // mui prop:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xl: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  // mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  lg: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  // mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  md: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  // mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  sm: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  // mui prop: false | 'auto' | true | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  xs: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),


  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiGrid.defaultProps = {
  rootClass: [],
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  direction: 'row',
  justify: 'center',
  alignItems: 'center',
  spacing: '2',
};
