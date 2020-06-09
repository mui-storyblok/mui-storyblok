/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Storyblok from '../../utils/Storyblok';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiMenu from '../MuiMenu/MuiMenu';
import MuiButtonDrawer from '../MuiButtonDrawer/MuiButtonDrawer';
import MuiIconButtonDrawer from '../MuiIconButtonDrawer/MuiIconButtonDrawer';
import MuiButtonSnackbar from '../MuiButtonSnackbar/MuiButtonSnackbar';
import MuiImage from '../MuiImage/MuiImage';
import Grid from '../Grid/Grid';

const MuiAppBar = ({
  rootClass,
  color,
  position,
  content,
  variant,
  disableGutters,
}) => {
  const gridItemComponents = {
    MuiButtonRedirect,
    MuiButtonHref,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiMenu,
    MuiButtonDrawer,
    MuiIconButtonDrawer,
    MuiButtonSnackbar,
    MuiImage,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

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
            <Grid {...item} key={index} gridItemComponents={gridItemComponents} />
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
   * mui props: 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent'
   * AppBar: The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * 'absolute'| 'fixed'| 'relative'| 'static' | 'sticky'
   * AppBar: The positioning type. The behavior of the different options is described in the MDN web docs.
   * Note: sticky is not universally supported and will fall back to static when unavailable.
   * */
  position: PropTypes.string,
  /**
   * mui prop: 'regular'| 'dense'
   * ToolBar: The variant to use.
   *  */
  variant: PropTypes.string,
  /**
   * mui prop: true | false
   * Toolbar: If true, disables gutter padding.
   * */
  disableGutters: PropTypes.bool,

  /**
   * Content passed to MuiAppBar to render
   * components: MuiTypography,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiMenu,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiAppBar.defaultProps = {
  color: 'primary',
  position: 'fixed',
  variant: 'regular',
  disableGutters: false,
  rootClass: [],
};
