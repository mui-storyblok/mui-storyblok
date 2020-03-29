import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Storyblok from 'lib/utils/Storyblok';
import MuiIcon from 'lib/components/MuiIcon/MuiIcon';
import MuiIconButtonRedirect from 'lib/components/MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from 'lib/components/MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from 'lib/components/MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from 'lib/components/MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from 'lib/components/MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from 'lib/components/MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from 'lib/components/MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from 'lib/components/MuiButtonDialog/MuiButtonDialog';
import MuiTooltip from 'lib/components/MuiTooltip/MuiTooltip';
import MuiLink from './components/MuiLink/MuiLink';

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
      {content.map((item, index) => {
        // MuiText is in storyblok and only returns text
        if (item.component === 'MuiText') return item.text;
        return createElement(components[item.component], Object.assign(item, { key: index }));
      })}
    </Typography>
  );
};

export default MuiTypography;

MuiTypography.propTypes = {
  /**
   * mui prop: 'inherit' | 'left' | 'center' | 'right' | 'justify'
   * Set the text-align on the component.
   * */
  align: PropTypes.string,
  /**
   * mui prop: 'initial'| 'inherit'| 'primary'| 'secondary'| 'textPrimary'| 'textSecondary'| 'error'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * mui prop: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline' | 'srOnly' | 'inherit'
   * Applies the theme typography styles.
   * */
  variant: PropTypes.string,

  /** hight of the Typography element */
  height: PropTypes.string,
  /** width of the Typography element */
  width: PropTypes.string,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
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
