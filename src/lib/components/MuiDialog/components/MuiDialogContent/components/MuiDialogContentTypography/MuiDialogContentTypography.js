import React from 'react';
import TypographyText from '../../../../../TypographyText/TypographyText';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';
import MuiIconButtonRedirect from '../../../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../../../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../../../MuiButtonDownload/MuiButtonDownload';
import { validComponents } from '../../../../../../utils/customProps';
/**
 * MuiDialogContentTypography
 */

export const MuiDialogContentTypography = (props) => {
  const components = {
    MuiIcon,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
  };

  return (
    <TypographyText
      {...props}
      components={components}
    />
  );
};

export default MuiDialogContentTypography;

MuiDialogContentTypography.propTypes = {
  content(props, propName, componentName) {
    const components = [
      'MuiIcon',
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'MuiText', // not imported but used in TypographyText
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiDialogContentTypography.defaultProps = {
  content: [],
};
