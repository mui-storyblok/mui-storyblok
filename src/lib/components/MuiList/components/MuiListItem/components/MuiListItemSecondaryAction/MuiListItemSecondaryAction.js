import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Storyblok from '../../../../../../utils/Storyblok';

const MuiIconButtonRedirect = lazy(() => import('../../../../../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../../../../../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../../../../../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiIconButtonDialog = lazy(() => import('../../../../../MuiIconButtonDialog/MuiIconButtonDialog'));
const MuiTooltip = lazy(() => import('../../../../../MuiTooltip/MuiTooltip'));

/**
 * MuiListItemSecondaryAction is used in storyblok redirect to react routes
 */

export const MuiListItemSecondaryAction = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiTooltip,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemSecondaryAction className={styles.root}>
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </ListItemSecondaryAction>
  );
};

export default MuiListItemSecondaryAction;

MuiListItemSecondaryAction.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiButtonRedirect, MuiTooltip; Allowed maximum: 1 */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiListItemSecondaryAction.defaultProps = {
  rootClass: [],
};
