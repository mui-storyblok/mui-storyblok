import React from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../../../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from '../../../MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from '../../../MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from '../../../MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from '../../../MuiButtonDialog/MuiButtonDialog';
import MuiExpansionPanel from '../../../MuiExpansionPanel/MuiExpansionPanel';
import MuiAudioPlayer from '../../../MuiAudioPlayer/MuiAudioPlayer';
import Storyblok from '../../../../utils/Storyblok';
import { renderComponents } from '../../../../utils/customComponents';

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
    MuiExpansionPanel,
    MuiAudioPlayer,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardActions
      className={styles.root}
      disableSpacing={disableSpacing}
    >
      {content.map((component, key) => renderComponents(components, component, key))}
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
   * can also render any customCompnent passed in
   * components:
    MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiButtonRedirect,
    MuiButtonHref,
    MuiButtonDownload,
    MuiButtonDialog,
   */
  content(props, propName, componentName) {
    const validComponents = [
      'MuiIconButtonRedirect',
      'MuiIconButtonHref',
      'MuiIconButtonDownload',
      'MuiIconButtonDialog',
      'MuiButtonRedirect',
      'MuiButtonHref',
      'MuiButtonDownload',
      'MuiButtonDialog',
    ];
    return validComponents(props, propName, componentName, validComponents);
  },
};

MuiCardActions.defaultProps = {
  rootClass: [],
  disableSpacing: false,
  content: [],
};
