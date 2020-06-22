import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Storyblok from '../../../../../../utils/Storyblok';
import MuiIconButtonRedirect from '../../../../../MuiIconButtonRedirect/MuiIconButtonRedirect';
import MuiIconButtonHref from '../../../../../MuiIconButtonHref/MuiIconButtonHref';
import MuiIconButtonDownload from '../../../../../MuiIconButtonDownload/MuiIconButtonDownload';
import MuiIconButtonDialog from '../../../../../MuiIconButtonDialog/MuiIconButtonDialog';
import MuiExpansionPanel from '../../../../../MuiExpansionPanel/MuiExpansionPanel';

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
    MuiExpansionPanel,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemSecondaryAction className={styles.root}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </ListItemSecondaryAction>
  );
};

export default MuiListItemSecondaryAction;

MuiListItemSecondaryAction.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * components: MuiIconButtonRedirect,
    MuiIconButtonHref,
    MuiIconButtonDownload,
    MuiIconButtonDialog,
    MuiTooltip,
   *  Allowed maximum: 1 */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiListItemSecondaryAction.defaultProps = {
  rootClass: [],
};
