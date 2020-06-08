import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import MuiGrid from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';
import sizeGrid from '../../utils/sizeGrid';
import GridItem from './components/GridItem/GridItem';

const Grid = ({
  alignContent,
  alignItems,
  rootClass,
  direction,
  justify,
  wrap,
  spacing,
  content,
  gridItemComponents,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px' });
  const gridRender = Object.keys(gridItemComponents);
  return (
    <MuiGrid
      container
      alignContent={alignContent}
      alignItems={alignItems}
      className={styles.root}
      direction={direction}
      justify={justify}
      wrap={wrap}
      spacing={Number(spacing)}
    >
      {content.map((item, index) => {
        if (gridRender.includes(item.component)) {
          return (
            createElement(
              gridItemComponents[item.component],
              Object.assign(item, {
                key: index,
                sizeGrid,
                gridItemComponents,
              }),
            )
          );
        }
        return (
          <GridItem
            {...item}
            key={index}
            gridItemComponents={gridItemComponents}
            sizeGrid={sizeGrid}
          />
        );
      })}
    </MuiGrid>
  );
};

export default Grid;

Grid.propTypes = {
  /**
   * developer prop to pass components to a gridItem
   */
  gridItemComponents: PropTypes.shape().isRequired,
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
   * mui prop:
   * 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify: PropTypes.string,
  /**
   * mui prop:  0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
   * Defines the space between the type item
   component. It can only be used on a type container component.
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

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
};
