import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Storyblok from '../../../utils/Storyblok';

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

  return (
    <CardHeader
      className={styles.root}
      title={title}
      subheader={subheader}
      avatar={(
        <Suspense fallback={<div />}>
          {
            avatar.map((item, index) => createElement(
              components[item.component],
              Object.assign(item, { key: index }),
            ))
          }
        </Suspense>
      )}
      action={(
        <Suspense fallback={<div />}>
          {
            action.map((item, index) => createElement(
              components[item.component],
              Object.assign(item, { key: index }),
            ))
          }
        </Suspense>
      )}
    />
  );
};

export default MuiCardHeader;

MuiCardHeader.propTypes = {
  /** title text for card header */
  title: PropTypes.string.isRequired,
  /** subheader text for card header */
  subheader: PropTypes.string,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  action: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),

  /**
   * MuiIconButtonRedirect, MuiIconButtonHref, MuiIconButtonDownload, MuiIconButtonDialog, MuiTooltip,
   * Allowed maximum: 1 */
  avatar: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
};

MuiCardHeader.defaultProps = {
  action: [],
  avatar: [],
  rootClass: [],
  subheader: '',
};
