import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import CardActions from '@material-ui/core/CardActions';

import Storyblok from 'lib/utils/Storyblok';
import MuiIconButtonRedirect from 'lib/components/MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from 'lib/components/MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from 'lib/components/MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from 'lib/components/MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from 'lib/components/MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from 'lib/components/MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from 'lib/components/MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from 'lib/components/MuiButtonDialog/MuiButtonDialog';

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
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
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
