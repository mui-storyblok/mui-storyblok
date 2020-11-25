import React from 'react';
import PropTypes from 'prop-types';
import { ListItemIcon as MuiListItemIcon } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponentsRequired } from 'lib/utils/customProps';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';

/**
 * ListItemIcon
 */

export const ListItemIcon = ({
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiListItemIcon
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Icon {...content[0]} />
    </MuiListItemIcon>
  );
};

export default ListItemIcon;

ListItemIcon.propTypes = {
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

ListItemIcon.defaultProps = {
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
