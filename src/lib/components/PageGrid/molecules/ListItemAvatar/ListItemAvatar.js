import React from 'react';
import PropTypes from 'prop-types';
import { ListItemAvatar as MuiListItemAvatar } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { validComponentsRequired } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';

/**
 * MuiListItemAvatar
 */

export const ListItemAvatar = ({
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiListItemAvatar
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Avatar>
        {renderComponentsWithBridge({ Icon }, content[0])}
      </Avatar>
    </MuiListItemAvatar>
  );
};

export default ListItemAvatar;

ListItemAvatar.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiIcon Allowed maximum: 1 */
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiIcon'], 1);
  },

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

ListItemAvatar.defaultProps = {
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
