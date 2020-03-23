import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import Storyblok from '../../../utils/Storyblok';

const MuiIconButtonRedirect = lazy(() => import('../../../MuiIconButtonRedirect/MuiIconButtonRedirect'));
const MuiIconButtonHref = lazy(() => import('../../../MuiIconButtonHref/MuiIconButtonHref'));
const MuiIconButtonDownload = lazy(() => import('../../../MuiIconButtonDownload/MuiIconButtonDownload'));
const MuiIconButtonDialog = lazy(() => import('../../../MuiIconButtonDialog/MuiIconButtonDialog'));

const MuiButtonRedirect = lazy(() => import('../../../MuiButtonRedirect/MuiButtonRedirect'));
const MuiButtonHref = lazy(() => import('../../../MuiButtonHref/MuiButtonHref'));
const MuiButtonDownload = lazy(() => import('../../../MuiButtonDownload/MuiButtonDownload'));
const MuiButtonDialog = lazy(() => import('../../../MuiButtonDialog/MuiButtonDialog'));


const MuiCardActions = ({
  content,
  rootClass,
  disableSpacing,
}) => {
  const components = {
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardActions
      className={styles.root}
      disableSpacing={disableSpacing}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </CardActions>
  );
};

export default MuiCardActions;

MuiCardActions.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * mui prop: true | false
   * If true, the actions do not have additional margin.
   */
  disableSpacing: PropTypes.bool,

  /**
   * Content passed to render
   * components: MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCardActions.defaultProps = {
  rootClass: [],
  disableSpacing: false
};
