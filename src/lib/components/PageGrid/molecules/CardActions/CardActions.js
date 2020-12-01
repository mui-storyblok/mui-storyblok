import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CardActions as MuiCardActions } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));
/* istanbul ignore next */
const ButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/ButtonDownload/ButtonDownload'));
/* istanbul ignore next */
const IconButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/IconButtonRedirect/IconButtonRedirect'));
/* istanbul ignore next */
const IconButtonDownload = lazy(() => import('lib/components/PageGrid/molecules/IconButtonDownload/IconButtonDownload'));
/* istanbul ignore next */
const IconButtonDialog = lazy(() => import('lib/components/PageGrid/templates/IconButtonDialog/IconButtonDialog'));
/* istanbul ignore next */
const ButtonDialog = lazy(() => import('lib/components/PageGrid/templates/ButtonDialog/ButtonDialog'));

const components = {
  ButtonRedirect,
  ButtonDownload,
  ButtonDialog,
  IconButtonRedirect,
  IconButtonDownload,
  IconButtonDialog,
};

const CardActions = ({
  content,
  rootClass,
  disableSpacing,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
  style,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { ...style });

  return (
    <MuiCardActions
      className={`${styles.root} ${storyblokClass}`}
      disableSpacing={disableSpacing}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, component, key)}
        </Suspense>
      ))}
    </MuiCardActions>
  );
};

export default CardActions;

CardActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,
  /**
   * Content passed to render
   * can also render any customCompnent passed in
   * components:
    ButtonRedirect,
   */
  content(props, propName, componentName) {
    const validComponents = [
      'ButtonRedirect',
    ];
    return validComponents(props, propName, componentName, validComponents);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

CardActions.defaultProps = {
  rootClass: [],
  disableSpacing: false,
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
