import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import Storyblok from '../../../../../../utils/Storyblok';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';

/**
 * MuiListItemAvatar is used in storyblok redirect to react routes
 */

export const MuiListItemAvatar = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ListItemAvatar className={styles.root}>
      <Avatar>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Avatar>
    </ListItemAvatar>
  );
};

export default MuiListItemAvatar;

MuiListItemAvatar.propTypes = {
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

MuiListItemAvatar.defaultProps = {
  rootClass: [],
};
