import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import sizeGrid from 'lib/utils/sizeGrid';
import Storyblok from 'lib/utils/Storyblok';
import { muiStringProp, muiGridProp, muiBlokNumberProp } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import { Box, Hidden } from '@material-ui/core';
import { useInView } from 'react-intersection-observer';

const GridItem = ({
  components,
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
  content,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
  transition,
  only,
  backgroundImageUrl,
}) => {
  let heroClass;
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const gridClass = window?.Storyblok?.inEditor ? {
    borderStyle: 'solid',
    borderColor: '#3889FF',
    borderWidth: '.1em',
  } : {};


  if (backgroundImageUrl) {
    heroClass = {
      ...{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        padding: 0,
        margin: 0,
      },
    };
  }

  const styles = Storyblok.arrayToMuiStyles(rootClass, { ...heroClass });

  return (
    <Hidden only={only}>
      <Grid
        item
        container
        alignContent={alignContent}
        alignItems={alignItems}
        direction={direction}
        justify={justify}
        wrap={wrap}
        spacing={Number(spacing)}
        xs={sizeGrid(xs)}
        sm={sizeGrid(sm)}
        md={sizeGrid(md)}
        lg={sizeGrid(lg)}
        xl={sizeGrid(xl)}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
        className={`${styles.root} ${storyblokClass} ${inView && transition}`}
        style={{ ...gridClass, opacity: inView ? 1 : 0 }}
        inView={inView}
        ref={ref}
      >
        {!content.length && <Box minHeight={200} width={{ xs: '100%' }} />}
        {content.length > 0
          && content.map((component, key) => (
            <Suspense fallback={<></>} key={key}>
              {renderComponentsWithBridge({ ...components }, {
                ...component,
                components,
                key,
              }, key)}
            </Suspense>
          ))
        }
      </Grid>
    </Hidden>
  );
};

export default GridItem;

GridItem.propTypes = {
  /**
   * storyblok multiselect of css classes
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
   * can also render any customCompnent passed in
   * will render any component in components prop
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
  /** Transition desired to apply on grid item. */
  transition: PropTypes.string,
  /**  components to render in the GridItem */
  components: PropTypes.shape(),
  /**
   * mui prop array of: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   * Hide the given breakpoint(s).
   * */
  only: PropTypes.arrayOf(PropTypes.string),
  /** url for background img */
  backgroundImageUrl: PropTypes.string,
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
  spacing: '0',
  wrap: 'wrap',
  xl: false,
  xs: false,
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
  components: {},
  transition: '',
  only: [],
  backgroundImageUrl: '',
};
