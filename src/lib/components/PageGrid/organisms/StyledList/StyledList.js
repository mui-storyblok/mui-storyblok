/* eslint-disable max-len */
import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Column } from '@mui-treasury/components/flex';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const MusicListItem = lazy(() => import('./components/MusicListItem/MusicListItem'));
/* istanbul ignore next */
const ChatzListItem = lazy(() => import('./components/ChatzListItem/ChatzListItem'));
/* istanbul ignore next */
const TrendyListItem = lazy(() => import('./components/TrendyListItem/TrendyListItem'));

const components = {
  MusicListItem,
  ChatzListItem,
  TrendyListItem,
};

const StyledList = ({
  width,
  content,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => (
  <Column
    gap={2}
    width={width}
    className={storyblokClass}
    data-blok-c={dataBlokC}
    data-blok-uid={dataBlokUid}
  >
    {content.map((component, key) => (
      <Suspense fallback={<></>}>
        {renderComponentsWithBridge(components, component, key)}
      </Suspense>
    ))}
  </Column>
);

export default StyledList;

StyledList.propTypes = {

  /** width of list */
  width: PropTypes.string,

  /** MuiListItem */
  content(props, propName, componentName) {
    const comps = ['ListItem'];
    return validComponents(props, propName, componentName, comps);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

StyledList.defaultProps = {
  width: '100%',
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
