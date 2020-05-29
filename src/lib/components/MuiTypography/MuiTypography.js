import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Storyblok from '../../utils/Storyblok';
import MuiIcon from '../MuiIcon/MuiIcon';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from '../MuiButtonDialog/MuiButtonDialog';
import MuiTooltip from '../MuiTooltip/MuiTooltip';
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
      component="div"
    >
      {content.map((item, index) => {
        if (item.component === 'MuiText') {
          const style = Storyblok.arrayToMuiStyles(item.rootClass);
          return (
            <Typography
              component="span"
              key={index}
              className={style.root}
              variant={item.variant}
              align={item.align}
              color={item.color}
            >
              {` ${item.text} `}
            </Typography>
          );
        }
        return createElement(components[item.component], Object.assign(item, { key: index }));
      })}
    </Typography>
  );
};

export default MuiTypography;

MuiTypography.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
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
