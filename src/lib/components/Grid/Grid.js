import React from 'react';
import PropTypes from 'prop-types';
import MuiGrid from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';
import sizeGrid from '../../utils/sizeGrid';
import { muiStringProp } from '../../utils/customProps';
import { renderComponents, storyBlokClickableProps } from '../../utils/customComponents';
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
  components,
  style,
  _editable,
  _uid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { padding: '25px', ...style });
  const gridRender = Object.keys(components);
  const clickable = storyBlokClickableProps({
    _editable,
    component: 'MuiGrid',
    _uid,
  });

  return (
    <MuiGrid
      container
      alignContent={alignContent}
      alignItems={alignItems}
      direction={direction}
      justify={justify}
      wrap={wrap}
      spacing={Number(spacing)}
      data-blok-c={clickable.dataBlokC}
      data-blok-uid={clickable.dataBlokUid}
      className={`${styles.root} ${clickable.storyblokClass}`}
    >
      {content.map((component, key) => {
        const sbClickable = storyBlokClickableProps(component);

        if (gridRender.includes(component.component)) {
          return renderComponents(components, { ...component, sizeGrid }, key);
        }

        return (
          <GridItem
            {...component}
            key={key}
            components={components}
            sizeGrid={sizeGrid}
            dataBlokC={sbClickable.dataBlokC}
            dataBlokUid={sbClickable.dataBlokUid}
            storyblokClass={sbClickable.storyblokClass}
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
  components: PropTypes.shape().isRequired,
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
};
