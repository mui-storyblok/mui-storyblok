/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {
  nestedComponentsProps,
  dimensionProp,
  muiStringProp,
} from '../../utils/customProps';
import Storyblok from '../../utils/Storyblok';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiMenu from '../MuiMenu/MuiMenu';
import MuiButtonDrawer from '../MuiButtonDrawer/MuiButtonDrawer';
import MuiIconButtonDrawer from '../MuiIconButtonDrawer/MuiIconButtonDrawer';
import MuiButtonSnackbar from '../MuiButtonSnackbar/MuiButtonSnackbar';
import MuiActionCardContainer from '../MuiActionCardContainer/MuiActionCardContainer';
import MuiImage from '../MuiImage/MuiImage';
import MuiTypography from '../MuiTypography/MuiTypography';
import MuiContactButton from '../MuiContactButton/MuiContactButton';
import Grid from '../Grid/Grid';

const MuiAppBar = ({
  rootClass,
  color,
  position,
  content,
  variant,
  disableGutters,
  height,
}) => {
  const components = {
    MuiButtonRedirect,
    MuiButtonHref,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiMenu,
    MuiButtonDrawer,
    MuiIconButtonDrawer,
    MuiButtonSnackbar,
    MuiImage,
    MuiActionCardContainer,
    MuiTypography,
    MuiContactButton,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { height });

  return (
    <AppBar
      className={styles.root}
      color={color}
      position={position}
    >
      <Toolbar
        variant={variant}
        disableGutters={disableGutters}
      >
        <>
          {content.map((item, index) => (
            <Grid {...item} key={index} components={components} />
          ))}
        </>
      </Toolbar>
    </AppBar>
  );
};

export default MuiAppBar;

MuiAppBar.propTypes = {
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
   * Content passed to MuiAppBar to render
   * components: 'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiMenu',
      'MuiButtonDrawer',
      'MuiIconButtonDrawer',
      'MuiButtonSnackbar',
      'MuiImage',
      'MuiActionCardContainer',
   */
  content(props, propName, componentName) {
    const validComponents = [
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiMenu',
      'MuiButtonDrawer',
      'MuiIconButtonDrawer',
      'MuiButtonSnackbar',
      'MuiImage',
      'MuiActionCardContainer',
    ];
    return nestedComponentsProps(props, propName, componentName, validComponents);
  },
};

MuiAppBar.defaultProps = {
  color: 'primary',
  height: '60px',
  position: 'fixed',
  variant: 'regular',
  disableGutters: false,
  rootClass: [],
  content: [],
};
