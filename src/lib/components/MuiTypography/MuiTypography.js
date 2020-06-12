import React from 'react';
import PropTypes from 'prop-types';
import TypographyText from '../TypographyText/TypographyText';
import MuiIcon from '../MuiIcon/MuiIcon';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../MuiButtonDownload/MuiButtonDownload';
import MuiLink from '../MuiLink/MuiLink';
import MuiButtonDialog from '../MuiButtonDialog/MuiButtonDialog';
import MuiIconButtonDialog from '../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiTooltip from '../MuiTooltip/MuiTooltip';

/**
 * MuiTypography is used in storyblok redirect to react routes
 */

export const MuiTypography = (props) => {
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

  return (
    <TypographyText
      {...props}
      components={components}
    />
  );
};

export default MuiTypography;

MuiTypography.propTypes = {

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTypography.defaultProps = {

};
