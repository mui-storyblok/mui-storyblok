import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';
import MuiAppBar from '../MuiAppBar/MuiAppBar';
import MuiMobileStepper from '../MuiMobileStepper/MuiMobileStepper';
import MuiHeroHeader from '../MuiHeroHeader/MuiHeroHeader';
import MuiCircularProgress from '../MuiCircularProgress/MuiCircularProgress';
import MuiGridItem from './components/MuiGridItem/MuiGridItem';
import MuiGridList from '../MuiGridList/MuiGridList';
import sizeGrid from '../../utils/sizeGrid';

const MuiGrid = ({
  alignContent,
  alignItems,
  rootClass,
  direction,
  justify,
  wrap,
  spacing,
  content,
}) => {
  const components = {
    MuiHeroHeader,
    MuiGridItem,
    MuiAppBar,
    MuiMobileStepper,
    MuiCircularProgress,
    MuiGridList,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px' });

  return (
    <Grid
      container
      alignContent={alignContent}
      alignItems={alignItems}
      className={styles.root}
      direction={direction}
      justify={justify}
      wrap={wrap}
      spacing={Number(spacing)}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index, sizeGrid }),
      ))}
    </Grid>
  );
};

export default MuiGrid;

MuiGrid.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'stretch'| 'center'| 'flex-start'| 'flex-end'| 'space-between'| 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent: PropTypes.string,
  /**
   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems: PropTypes.string,
  /*
  * mui prop: 'row' | 'row-reverse' | 'column' | 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction: PropTypes.string,
  /**
   * mui prop: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify: PropTypes.string,
  /**
   * mui prop:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
   * Defines the space between the type item component. It can only be used on a type container component.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * mui prop: 'nowrap' | 'wrap' | 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiGridItem, MuiAppBar
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiGrid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
};
