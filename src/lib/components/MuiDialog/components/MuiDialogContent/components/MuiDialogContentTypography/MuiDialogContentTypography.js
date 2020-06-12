import React from 'react';
import PropTypes from 'prop-types';
import TypographyText from '../../../../../TypographyText/TypographyText';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';
import MuiIconButtonRedirect from '../../../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiButtonRedirect from '../../../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../../../MuiButtonDownload/MuiButtonDownload';

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

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiDialogContentTypography.defaultProps = {

};
