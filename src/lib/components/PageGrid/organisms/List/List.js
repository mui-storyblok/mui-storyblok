/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { List as MuiList } from '@material-ui/core';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import Storyblok from 'lib/utils/Storyblok';

const ListItem = lazy(() => import('./components/ListItem/ListItem'));

const components = {
  ListItem,
};

const List = ({
  rootClass,
  dense,
  disablePadding,
  width,
  content,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiList
      className={`${styles.root} ${storyblokClass}`}
      dense={dense}
      disablePadding={disablePadding}
      style={{
        width,
      }}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ ...components }, component, key)}
        </Suspense>
      ))}
    </MuiList>
  );
};

export default List;

List.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** mui prop: true | false */
  disablePadding: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, compact vertical padding designed for keyboard and mouse input will be used for the list and list items. The prop is available to descendant components as the dense context.
   * */
  dense: PropTypes.bool,
  /** width of list */
  width: PropTypes.string,

  /** MuiListItem */
  content(props, propName, componentName) {
    const comps = ['ListItem'];
    return validComponents(props, propName, componentName, comps);
  },
};

List.defaultProps = {
  width: '100%',
  dense: false,
  disablePadding: false,
  rootClass: [],
  content: [],
};
