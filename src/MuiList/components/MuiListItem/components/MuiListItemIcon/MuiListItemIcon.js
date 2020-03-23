import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Storyblok from '../../../../../utils/Storyblok';

const MuiIcon = lazy(() => import('../../../../../MuiIcon/MuiIcon'));

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
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </ListItemIcon>
  );
};

export default MuiListItemIcon;

MuiListItemIcon.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiIcon Allowed maximum: 1 */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiListItemIcon.defaultProps = {
  rootClass: [],
};
