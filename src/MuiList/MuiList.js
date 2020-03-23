import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Storyblok from '../utils/Storyblok';

const MuiListItem = lazy(() => import('./components/MuiListItem/MuiListItem'));

const MuiList = ({
  rootClass,
  dense,
  disablePadding,
  width,
  content,
}) => {
  const components = {
    MuiListItem,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { width });

  return (
    <List
      className={styles.root}
      dense={dense}
      disablePadding={disablePadding}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </List>
  );
};

export default MuiList;

MuiList.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: true | false */
  disablePadding: PropTypes.bool,
  /** mui prop: true | false */
  dense: PropTypes.bool,
  /** width of list */
  width: PropTypes.string,

  /** MuiListItem */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiList.defaultProps = {
  width: '100%',
  dense: false,
  disablePadding: false,
  rootClass: [],
};
