import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../../utils/Storyblok';

const MuiButtonRedirect = lazy(() => import('../../../MuiButtonRedirect/MuiButtonRedirect'));
const MuiCard = lazy(() => import('../../../MuiCard/MuiCard'));
const MuiTypography = lazy(() => import('../../../MuiTypography/MuiTypography'));
const MuiMenu = lazy(() => import('../../../MuiMenu/MuiMenu'));
const MuiIcon = lazy(() => import('../../../MuiIcon/MuiIcon'));
const MuiExpansionPanel = lazy(() => import('../../../MuiExpansionPanel/MuiExpansionPanel'));
// const MuiList = lazy(() => import('../../../MuiList/MuiList'));

const MuiGridItem = ({
  sizeGrid,
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
    MuiButtonRedirect,
    MuiCard,
    MuiTypography,
    MuiMenu,
    MuiIcon,
    MuiExpansionPanel,
    // MuiList,
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
      spacing={(Number(spacing))}
      xl={sizeGrid(xl)}
      lg={sizeGrid(lg)}
      md={sizeGrid(md)}
      sm={sizeGrid(sm)}
      xs={sizeGrid(xs)}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </Grid>
  );
};

export default MuiGridItem;

MuiGridItem.propTypes = {
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

  /** prop from parent compoent to render corect type for grid size */
  sizeGrid: PropTypes.func.isRequired,

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiGridItem.defaultProps = {
  rootClass: [],
  xl: false,
  lg: false,
  md: false,
  sm: false,
  xs: false,
  direction: 'row',
  justify: 'center',
  alignItems: 'center',
  spacing: 2,
};
