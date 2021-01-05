import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { DialogContent as MuiDialogContent } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

/* istanbul ignore next */
const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
/* istanbul ignore next */
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));
/* istanbul ignore next */
const ListDropdown = lazy(() => import('lib/components/PageGrid/organisms/ListDropdown/ListDropdown'));

const components = {
  Typography,
  List,
  ListDropdown,
};

const DialogContent = ({
  dividers,
  content,
  rootClass,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiDialogContent
      className={`${styles.root} ${storyblokClass}`}
      dividers={dividers}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, component, key)}
        </Suspense>
      ))}
    </MuiDialogContent>
  );
};

export default DialogContent;

DialogContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component.
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * Display the top and bottom dividers.
   * */
  dividers: PropTypes.bool,
  /** 'MuiTypography', 'MuiAccordion', 'BlokForm' */
  content(props, propName, componentName) {
    const comps = ['Typography', 'List'];
    return validComponents(props, propName, componentName, comps, 1);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

DialogContent.defaultProps = {
  dividers: false,
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
