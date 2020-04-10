import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Storyblok from '../../../../../../utils/Storyblok';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';

/**
 * MuiListItemIcon is used in storyblok redirect to react routes
 */

export const MuiListItemIcon = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemIcon className={styles.root}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
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
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiListItemIcon.defaultProps = {
  rootClass: [],
};
