import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { muiStringProp, dimensionProp } from 'lib/utils/customProps';

import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';

// atoms
const Image = lazy(() => import('lib/components/PageGrid/atoms/Image/Image'));
const Video = lazy(() => import('lib/components/PageGrid/atoms/Video/Video'));

// molecules
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));

// organisms
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));
const Card = lazy(() => import('lib/components/PageGrid/organisms/Card/Card'));
const GridList = lazy(() => import('lib/components/PageGrid/organisms/GridList/GridList'));

// templates
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));

const components = {
  Image,
  Video,
  Typography,
  ButtonDownload,
  ButtonRedirect,
  IconButtonDownload,
  IconButtonRedirect,
  List,
  Card,
  GridList,
  ButtonDialog,
  IconButtonDialog,
  HeroHeaderGridItem: GridItem,
};

const HeroHeader = (props) => {
  const { height, backgroundImageUrl } = props;
  let heroClass = {
    height,
    position: 'relative',
    padding: 0,
    margin: 0,
  };

  if (backgroundImageUrl) {
    heroClass = {
      ...heroClass,
      ...{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      },
    };
  }

  return <Grid {...props} components={components} style={heroClass} />;
};

export default HeroHeader;


HeroHeader.propTypes = {
  /** url for background img */
  backgroundImageUrl: PropTypes.string,
  /** height of the container */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
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

HeroHeader.defaultProps = {
  height: '100%',
  backgroundImageUrl: '',
  alignContent: 'stretch',
  alignItems: 'center',
  rootClass: [],
  direction: 'row',
  justify: 'center',
  spacing: '2',
  wrap: 'wrap',
  style: {},
};
