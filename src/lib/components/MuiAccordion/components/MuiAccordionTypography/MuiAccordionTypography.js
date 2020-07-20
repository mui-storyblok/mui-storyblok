import React from 'react';
import TypographyText from '../../../TypographyText/TypographyText';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../MuiButtonDownload/MuiButtonDownload';
import GoogleConversions from '../../../GoogleConversions/GoogleConversions';
import { validComponents } from '../../../../utils/customProps';

/**
 * MuiAccordionTypography
 */

export const MuiAccordionTypography = (props) => {
  const components = {
    MuiIcon,
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    GoogleConversions,
  };

  return (
    <TypographyText
      {...props}
      components={components}
    />
  );
};

export default MuiAccordionTypography;

MuiAccordionTypography.propTypes = {
  content(props, propName, componentName) {
    const components = [
      'MuiIcon',
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'GoogleConversions',
      'MuiText', // not imported but used in TypographyText
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiAccordionTypography.defaultProps = {
  content: [],
};
