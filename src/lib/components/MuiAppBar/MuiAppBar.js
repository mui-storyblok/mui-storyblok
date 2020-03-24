import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Storyblok from '../../utils/Storyblok';

const MuiTypography = lazy(() => import('../MuiTypography/MuiTypography'));
const MuiIconButtonRedirect = lazy(() => import('../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../MuiIconButtonHref/MuiIconButtonHref'));
const MuiButtonRedirect = lazy(() => import('../MuiButtonRedirect/MuiButtonRedirect'));
const MuiButtonHref = lazy(() => import('../MuiButtonHref/MuiButtonHref'));
const MuiMenu = lazy(() => import('../MuiMenu/MuiMenu'));

const MuiAppBar = ({
  rootClass,
  color,
  position,
  content,
  variant,
  disableGutters,
}) => {
  const components = {
    MuiTypography,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiMenu,
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
        <Suspense fallback={<div />}>
          {content.map((item, index) => createElement(
            components[item.component],
            Object.assign(item, { key: index }),
          ))}
        </Suspense>
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
   * Content passed to MuiGrid to render
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
