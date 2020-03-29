import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Storyblok from 'lib/utils/Storyblok';

import MuiIconButtonRedirect from 'lib/components/MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from 'lib/components/MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from 'lib/components/MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from 'lib/components/MuiIconButtonDialog/MuiIconButtonDialog';
import MuiButtonRedirect from 'lib/components/MuiButtonRedirect/MuiButtonRedirect';
import MuiButtonHref from 'lib/components/MuiButtonHref/MuiButtonHref';
import MuiButtonDownload from 'lib/components/MuiButtonDownload/MuiButtonDownload';
import MuiButtonDialog from 'lib/components/MuiButtonDialog/MuiButtonDialog';

const MuiTooltip = ({
  rootClass,
  title,
  arrow,
  placement,
  content,
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
    <Tooltip
      className={styles.root}
      placement={placement}
      title={title}
      arrow={arrow}
    >
      <IconButton>
        {/*
          Warning: validateDOMNesting(...): <button> cannot appear as a descendant of <button>
          components use IconButton to wrap MuiIcon and handle onClick event but when its
          rendered Tooltip is not able to show message
        */}
        {(createElement(components[content[0].component], content[0]))}
      </IconButton>
    </Tooltip>
  );
};

export default MuiTooltip;

MuiTooltip.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** text for tooltip */
  title: PropTypes.string.isRequired,
  /**
   * mui prop: true | false
   * If true, adds an arrow to the tooltip.
   * */
  arrow: PropTypes.bool,
  /**
   * mui prop: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top'
   * Tooltip placement.
   * */
  placement: PropTypes.string,

  /** Allowed maximum: 1
   *  MuiIconButtonRedirect,
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

MuiTooltip.defaultProps = {
  arrow: false,
  placement: 'bottom',
  rootClass: [],
};
