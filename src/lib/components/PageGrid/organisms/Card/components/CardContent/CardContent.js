import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { CardContent as MuiCardContent } from '@material-ui/core';
import { validComponents } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';

import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Video = lazy(() => import('lib/components/PageGrid/atoms/Video/Video'));
/* istanbul ignore next */
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
/* istanbul ignore next */
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));
/* istanbul ignore next */
const ListDropdown = lazy(() => import('lib/components/PageGrid/organisms/ListDropdown/ListDropdown'));
/* istanbul ignore next */
const Accordion = lazy(() => import('lib/components/PageGrid/organisms/Accordion/Accordion'));
/* istanbul ignore next */
const TextInfo = lazy(() => import('lib/components/PageGrid/atoms/TextInfo/TextInfo'));

const components = {
  Video,
  Accordion,
  Typography,
  List,
  ListDropdown,
  TextInfo,
};

const CardContent = ({
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiCardContent
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, component, key)}
        </Suspense>
      ))}
    </MuiCardContent>
  );
};

export default CardContent;

CardContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Content passed to render
   * components:
    Typography,
    Accordion,
    List,
   */
  content(props, propName, componentName) {
    const comps = [
      'Typography',
      'Accordion',
      'List',
    ];
    return validComponents(props, propName, componentName, comps);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

CardContent.defaultProps = {
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
