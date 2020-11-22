import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CardActions as MuiCardActions } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';

/* istanbul ignore next */
const ButtonRedirect = lazy(() => import('lib/components/PageGrid/molecules/ButtonRedirect/ButtonRedirect'));

const components = {
  ButtonRedirect
};

const CardActions = ({
  content,
  rootClass,
  disableSpacing,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiCardActions
      className={`${styles.root} ${storyblokClass}`}
      disableSpacing={disableSpacing}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, component, key)}
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
    MuiIconButtonDownload,
   */
  content(props, propName, componentName) {
    const validComponents = [
      'MuiIconButtonDownload',
    ];
    return validComponents(props, propName, componentName, validComponents);
  },
};

CardActions.defaultProps = {
  rootClass: [],
  disableSpacing: false,
  content: [],
};
