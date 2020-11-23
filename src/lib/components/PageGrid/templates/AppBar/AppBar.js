/* eslint-disable max-len */
import React, { lazy } from 'react';
import PropTypes from 'prop-types';
import { AppBar as MuiAppBar, Toolbar } from '@material-ui/core';
import {
  validComponentsRequired,
  dimensionProp,
  muiStringProp,
} from 'lib/utils/customProps';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';
import Storyblok from 'lib/utils/Storyblok';
import Grid from 'lib/components/PageGrid/templates/Grid/Grid';
import GridItem from 'lib/components/PageGrid/templates/GridItem/GridItem';
import AppBarOffset from './components/AppBarOffset/AppBarOffset';

const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));

const components = {
  Typography,
  AppBarGridItem: GridItem,
};

const AppBar = ({
  rootClass,
  color,
  position,
  content,
  variant,
  disableGutters,
  height,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height });

  const grid = content[0];

  return (
    <>
      <MuiAppBar
        color={color}
        position={position}
        className={`${styles.root} ${storyblokClass}`}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
      >
        <Toolbar variant={variant} disableGutters={disableGutters}>
          {renderComponentsWithBridg({ AppBarGrid: Grid }, {
            ...grid,
            components,
          })}
        </Toolbar>
      </MuiAppBar>
      {position === 'fixed' && <AppBarOffset />}
    </>
  );
};

export default AppBar;

AppBar.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component.
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: 'default', 'inherit', 'primary', 'secondary', 'transparent'
   * AppBar: The color of the component. It supports those theme colors that make sense for this component.
   * */
  color(props, propName, componentName) {
    const validProp = ['default', 'inherit', 'primary', 'secondary', 'transparent'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * 'absolute', 'fixed', 'relative', 'static' , 'sticky'
   * AppBar: The positioning type. The behavior of the different options is described in the MDN web docs.
   * Note: sticky is not universally supported and will fall back to static when unavailable.
   * */
  position(props, propName, componentName) {
    const validProp = ['absolute', 'fixed', 'relative', 'static', 'sticky'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: 'regular', 'dense'
   * ToolBar: The variant to use.
   *  */
  variant(props, propName, componentName) {
    const validProp = ['regular', 'dense'];
    return muiStringProp(props, propName, componentName, validProp);
  },
  /**
   * mui prop: true | false
   * Toolbar: If true, disables gutter padding.
   * */
  disableGutters: PropTypes.bool,
  /**
   * Height of the App Bar must use 'px', 'em', '%' 'vh', 'vw', as unit of measurement
   * */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Content passed to AppBar to render
   * components:
      'GridItem',
   */
  content(props, propName, componentName) {
    const validComponents = [
      'AppBarGrid',
    ];
    return validComponentsRequired(props, propName, componentName, validComponents, 1);
  },
};

AppBar.defaultProps = {
  color: 'primary',
  height: '60px',
  position: 'fixed',
  variant: 'regular',
  disableGutters: false,
  rootClass: [],
  content: [],
};
