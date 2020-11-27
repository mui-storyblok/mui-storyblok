
import React, { Suspense } from 'react';
import { Grid as MuiGrid, Box } from '@material-ui/core';
import { useFullBorderedGridStyles } from '@mui-treasury/styles/grid/fullBordered';
import PropTypes from 'prop-types';
import Storyblok from 'lib/utils/Storyblok';
import { muiStringProp } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';

const comps = {
  GridItem,
};

const Grid = ({
  alignContent,
  alignItems,
  rootClass,
  direction,
  justify,
  wrap,
  spacing,
  content,
  components,
  style,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  let gridClass = useFullBorderedGridStyles({ borderColor: 'primary.main' });
  gridClass = window?.Storyblok?.inEditor ? gridClass : {};

  const styles = Storyblok.arrayToMuiStyles(rootClass, { ...style });

  return (
    <Box width={{ xs: '100%' }}>
      <MuiGrid
        container
        alignContent={alignContent}
        alignItems={alignItems}
        direction={direction}
        justify={justify}
        wrap={wrap}
        spacing={Number(spacing)}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
        className={`${styles.root} ${storyblokClass}`}
        classes={gridClass}
      >
        {content.map((component, key) => (
          <Suspense fallback={<Box width={{ xs: '100%' }} />}>
            {renderComponentsWithBridge({ ...comps, ...components }, {
              ...component,
              components,
              key,
            }, key)}
          </Suspense>
        ))}
      </MuiGrid>
    </Box>
  );
};

export default Grid;

Grid.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'
   * Defines the align-content style property. It's applied for all screen sizes.
   */
  alignContent(props, propName, componentName) {
    const validProp = ['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: 'flex-start' , 'center' , 'flex-end' , 'stretch' , 'baseline'
   * Defines the align-items style property. It's applied for all screen sizes.
   */
  alignItems(props, propName, componentName) {
    const validProp = ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /*
  * mui prop: 'row', 'row-reverse', 'column', 'column-reverse'
  * Defines the flex-direction style property. It is applied for all screen sizes.
  */
  direction(props, propName, componentName) {
    const validProp = ['row', 'row-reverse', 'column', 'column-reverse'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop:
   * 'flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'
   * Defines the justify-content style property. It is applied for all screen sizes.
   */
  justify(props, propName, componentName) {
    const validProp = ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop:  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
   * Defines the space between the type item
   component. It can only be used on a type container component.
   */
  spacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * mui prop: 'nowrap', 'wrap', 'wrap-reverse'
   * Defines the flex-wrap style property. It's applied for all screen sizes.
   */
  wrap(props, propName, componentName) {
    const validProp = ['nowrap', 'wrap', 'wrap-reverse'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * Content passed to render
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** style obj to pass to grid */
  style: PropTypes.shape(),

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
  /**  components to render in the GridItem */
  components: PropTypes.shape(),
};

Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
  style: {},
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  components: {},
};
