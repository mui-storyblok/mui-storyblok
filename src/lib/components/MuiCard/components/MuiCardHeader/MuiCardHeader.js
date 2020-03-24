import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Storyblok from '../../../../utils/Storyblok';

const MuiIconButtonRedirect = lazy(() => import('../../../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../../../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../../../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiIconButtonDialog = lazy(() => import('../../../MuiIconButtonDialog/MuiIconButtonDialog'));
const MuiTooltip = lazy(() => import('../../../MuiTooltip/MuiTooltip'));
const MuiIcon = lazy(() => import('../../../MuiIcon/MuiIcon'));

/**
 * MuiCardHeader is used in storyblok redirect to react routes
 */

export const MuiCardHeader = ({
  rootClass,
  subheader,
  title,
  action,
  avatar,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiTooltip,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiavatar = avatar[0];
  const muiaction = action[0];

  return (
    <CardHeader
      className={styles.root}
      title={title}
      subheader={subheader}
      avatar={(
        <Suspense fallback={<div />}>
          {
            muiavatar
              ? createElement(
                components[muiavatar.component],
                muiavatar,
              )
              : null
          }
        </Suspense>
      )}
      action={(
        <Suspense fallback={<div />}>
          {
            muiaction
              ? createElement(
                components[muiaction.component],
                muiaction,
              )
              : null
          }
        </Suspense>
      )}
    />
  );
};

export default MuiCardHeader;

MuiCardHeader.propTypes = {
  /**
   * The content of the Card Title.
   */
  title: PropTypes.string.isRequired,
  /**
   * The content of the component.
  */
  subheader: PropTypes.string,
  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,
   * Allowed maximum: 1
   * The action to display in the card header.
   * */
  action: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),

  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,
   * Allowed maximum: 1
   * The Avatar for the Card Header.
   * */
  avatar: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),

  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
};

MuiCardHeader.defaultProps = {
  action: [],
  avatar: [],
  rootClass: [],
  subheader: '',
};
