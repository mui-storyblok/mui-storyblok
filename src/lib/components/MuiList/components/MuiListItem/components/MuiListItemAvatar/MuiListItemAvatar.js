import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { validComponentsRequired } from '../../../../../../utils/customProps';
import Storyblok from '../../../../../../utils/Storyblok';
import MuiIcon from '../../../../../MuiIcon/MuiIcon';

/**
 * MuiListItemAvatar
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
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIcon'], 1);
  },
};

MuiListItemAvatar.defaultProps = {
  rootClass: [],
  content: [],
};
