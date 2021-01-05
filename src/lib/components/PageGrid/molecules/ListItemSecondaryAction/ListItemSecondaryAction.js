import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { ListItemSecondaryAction as MuiListItemSecondaryAction } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
/* istanbul ignore next */
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));

const components = {
  IconButtonRedirect,
  IconButtonDownload,
  IconButtonDialog,
};

/**
 * ListItemSecondaryAction is used in storyblok redirect to react routes
 */

export const ListItemSecondaryAction = ({
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiListItemSecondaryAction
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Suspense fallback={<></>}>
        {renderComponentsWithBridge(components, content[0])}
      </Suspense>
    </MuiListItemSecondaryAction>
  );
};

export default ListItemSecondaryAction;

ListItemSecondaryAction.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * components:

   *  Allowed maximum: 1 */
  content(props, propName, componentName) {
    const comp = [
      'IconButtonRedirect',
      'IconButtonHref',
      'IconButtonDownload',
      'IconButtonDialog',
    ];
    return validComponents(props, propName, componentName, comp, 1);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

ListItemSecondaryAction.defaultProps = {
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
