import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Storyblok from '../../utils/Storyblok';

const MuiLink = lazy(() => import('./components/MuiLink/MuiLink'));
const MuiIcon = lazy(() => import('../MuiIcon/MuiIcon'));
const MuiIconButtonRedirect = lazy(() => import('../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiIconButtonDialog = lazy(() => import('../MuiIconButtonDialog/MuiIconButtonDialog'));

const MuiButtonRedirect = lazy(() => import('../MuiButtonRedirect/MuiButtonRedirect'));
const MuiButtonHref = lazy(() => import('../MuiButtonHref/MuiButtonHref'));
const MuiButtonDownload = lazy(() => import('../MuiButtonDownload/MuiButtonDownload'));
const MuiButtonDialog = lazy(() => import('../MuiButtonDialog/MuiButtonDialog'));

const MuiTooltip = lazy(() => import('../MuiTooltip/MuiTooltip'));

/**
 * MuiTypography is used in storyblok redirect to react routes
 */

export const MuiTypography = ({
  align,
  color,
  variant,
  height,
  width,
  rootClass,
  content,
}) => {
  const components = {
    MuiLink,
    MuiIcon,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
    MuiTooltip,
  };

  const defaultStyles = {
    height,
    width,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass, defaultStyles);

  return (
    <Typography
      className={styles.root}
      variant={variant}
      align={align}
      color={color}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => {
          // MuiText is in storyblok and only returns text
          if (item.component === 'MuiText') return item.text;
          return createElement(components[item.component], Object.assign(item, { key: index }));
        })}
      </Suspense>
    </Typography>
  );
};

export default MuiTypography;

MuiTypography.propTypes = {
  /** mui prop: 'inherit' | 'left' | 'center' | 'right' | 'justify' */
  align: PropTypes.string,
  /** 'initial'| 'inherit'| 'primary'| 'secondary'| 'textPrimary'| 'textSecondary'| 'error' */
  color: PropTypes.string,
  /** 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit' */
  variant: PropTypes.string,
  /** hight of the Typography element */
  height: PropTypes.string,
  /** width of the Typography element */
  width: PropTypes.string,

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTypography.defaultProps = {
  width: '100%',
  height: '100%',
  align: 'inherit',
  color: 'initial',
  variant: 'body1',
  rootClass: [],
};
