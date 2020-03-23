import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Storyblok from '../utils/Storyblok';

const MuiTypography = lazy(() => import('../MuiTypography/MuiTypography'));
const MuiButtonRedirect = lazy(() => import('../MuiButtonRedirect/MuiButtonRedirect'));
// const MuiMenu = lazy(() => import('sharedComponents/StoryBlok/MuiMenu/MuiMenu'));

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
    MuiButtonRedirect,
    // MuiMenu,
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
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** 'default' | 'inherit' | 'primary' | 'secondary' | 'transparent' */
  color: PropTypes.string,
  /** 'absolute'| 'fixed'| 'relative'| 'static' | 'sticky' */
  position: PropTypes.string,

  /** mui prop: 'regular'| 'dense' */
  variant: PropTypes.string,
  /** mui prop: true | false */
  disableGutters: PropTypes.bool,


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
