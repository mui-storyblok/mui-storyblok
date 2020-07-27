import React from 'react';
import TypographyText from '../TypographyText/TypographyText';
import MuiIcon from '../MuiIcon/MuiIcon';
import { validComponents } from '../../utils/customProps';
import MuiIconButtonRedirect from '../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../MuiButtonDownload/MuiButtonDownload';
import MuiLink from '../MuiLink/MuiLink';
import MuiButtonDialog from '../MuiButtonDialog/MuiButtonDialog';
import MuiIconButtonDialog from '../MuiIconButtonDialog/MuiIconButtonDialog';
import GoogleConversions from '../GoogleConversions/GoogleConversions';

/**
 * MuiTypography
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
    GoogleConversions,
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
  content(props, propName, componentName) {
    const components = [
      'MuiLink',
      'MuiIcon',
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'MuiButtonDialog',
      'GoogleConversions',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiTypography.defaultProps = {
  content: [],
};
