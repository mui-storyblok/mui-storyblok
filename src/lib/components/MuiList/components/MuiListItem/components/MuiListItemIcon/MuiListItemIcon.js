import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Storyblok from '../../../../../../utils/Storyblok';
import { validComponentsRequired } from '../../../../../../utils/customProps';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';

/**
 * MuiListItemIcon
 */

export const MuiListItemIcon = ({
  content,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemIcon className={styles.root}>
      <MuiIcon {...content[0]} />
    </ListItemIcon>
  );
};

export default MuiListItemIcon;

MuiListItemIcon.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiIcon Allowed maximum: 1 */
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIcon'], 1);
  },
};

MuiListItemIcon.defaultProps = {
  rootClass: [],
  content: [],
};
