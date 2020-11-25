import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CardHeader as MuiCardHeader } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Icon = lazy(() => import('lib/components/PageGrid/atoms/Icon/Icon'));
/* istanbul ignore next */
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));

const components = {
  Icon,
  IconButtonDownload,
  IconButtonRedirect,
  IconButtonDialog,
};

/**
 * CardHeader is used in storyblok
 */

export const CardHeader = ({
  rootClass,
  subheader,
  title,
  action,
  avatar,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiavatar = avatar[0];
  const muiaction = action[0];

  return (
    <MuiCardHeader
      className={`${styles.root} ${storyblokClass}`}
      title={title}
      subheader={subheader}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
      avatar={
        muiavatar
          ? (
            <Suspense fallback={<></>}>
              {renderComponentsWithBridge(components, muiavatar)}
            </Suspense>
          )
          : null
      }
      action={
        muiaction
          ? (
            <Suspense fallback={<></>}>
              {renderComponentsWithBridge(components, muiaction)}
            </Suspense>
          )
          : null
      }
    />
  );
};

export default CardHeader;

CardHeader.propTypes = {
  /**
   * The content of the Card Title.
   */
  title: PropTypes.string.isRequired,
  /**
   * subheader.
  */
  subheader: PropTypes.string,
  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, GoogleConversion
   * Allowed maximum: 1
   * The action to display in the card header.
   * */
  action(props, propName, componentName) {
    const comps = [
      'Icon',
    ];
    return validComponents(props, propName, componentName, comps, 1);
  },

  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, GoogleConversion
   * Allowed maximum: 1
   * The Avatar for the Card Header.
   * */
  avatar(props, propName, componentName) {
    const comps = [
      'Icon',
    ];
    return validComponents(props, propName, componentName, comps, 1);
  },
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

CardHeader.defaultProps = {
  action: [],
  avatar: [],
  rootClass: [],
  subheader: '',
};
