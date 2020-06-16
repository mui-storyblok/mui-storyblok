import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../../../utils/Storyblok';
import { muiStringProp, muiGridProp, muiBlokNumberProp } from '../../../../utils/customProps';

const GridItem = ({
  alignContent,
  alignItems,
  rootClass,
  direction,
  justify,
  lg,
  md,
  sm,
  wrap,
  spacing,
  xs,
  xl,
  sizeGrid,
  content,
  components,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px' });
  return (
    <Grid
      item
      container
      alignContent={alignContent}
      alignItems={alignItems}
      className={styles.root}
      direction={direction}
      justify={justify}
      lg={sizeGrid(lg)}
      md={sizeGrid(md)}
      sm={sizeGrid(sm)}
      wrap={wrap}
      spacing={Number(spacing)}
      xs={sizeGrid(xs)}
      xl={sizeGrid(xl)}
    >
      {content.length > 0 && content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </Grid>
  );
};

export default GridItem;

GridItem.propTypes = {
  /**
   * developer prop to pass components to a gridItem
   */
  components: PropTypes.shape().isRequired,
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent(props, propName, componentName) {
    const validProps = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'flex-start' , 'center' , 'flex-end' , 'stretch' , 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems(props, propName, componentName) {
    const validProps = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /*
  * mui prop: 'row' , 'row-reverse' , 'column' , 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction(props, propName, componentName) {
    const validProps = ['row', 'row-reverse', 'column', 'column-reverse'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop:
   'flex-start' , 'center' , 'flex-end' , 'space-between' , 'space-around' , 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify(props, propName, componentName) {
    const validProps = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop:
   false , 'auto' , true , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12
   * Defines the number of grids the component is going to use.
    It's applied for the breakpoint and wider screens if not overridden.
   */
  lg(props, propName, componentName) {
    return muiGridProp(props, propName, componentName);
  },
  /**
   * mui prop: false , 'auto' , true , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12
   * Defines the number of grids the component is going to use.
   It's applied for the breakpoint and wider screens if not overridden.
   */
  md(props, propName, componentName) {
    return muiGridProp(props, propName, componentName);
  },
  /**
   * mui prop: false , 'auto' , true , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12
   * Defines the number of grids the component is going to use.
   It's applied for the breakpoint and wider screens if not overridden.
   */
  sm(props, propName, componentName) {
    return muiGridProp(props, propName, componentName);
  },
  /**
   * mui prop:  0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10
   * Defines the space between the type item component.
   * It can only be used on a type container component.
   */
  // spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  spacing(props, propName, componentName) {
    const validProps = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return muiBlokNumberProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'nowrap' , 'wrap' , 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap(props, propName, componentName) {
    const validProps = ['nowrap', 'wrap', 'wrap-reverse'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: false , 'auto' , true , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12
   * Defines the number of grids the component is going to use.
   It's applied for the breakpoint and wider screens if not overridden.
   */
  xs(props, propName, componentName) {
    return muiGridProp(props, propName, componentName);
  },
  /**
   * mui prop: false , 'auto' , true , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12
   * Defines the number of grids the component is going to use.
   It's applied for the breakpoint and wider screens if not overridden.
   */
  xl(props, propName, componentName) {
    return muiGridProp(props, propName, componentName);
  },

  /**
   * Content passed to from api
   * will render any component in components prop
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** prop passed down from parent not in storyblok */
  sizeGrid: PropTypes.func.isRequired,
};

GridItem.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  lg: false,
  md: false,
  sm: false,
  spacing: '2',
  wrap: 'wrap',
  xl: false,
  xs: false,
};
