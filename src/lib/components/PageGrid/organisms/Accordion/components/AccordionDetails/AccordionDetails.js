import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { AccordionDetails as MuiAccordionDetails } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';

const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));
const List = lazy(() => import('lib/components/PageGrid/organisms/List/List'));

const components = {
  Typography,
  List,
};

const AccordionDetails = ({
  rootClass,
  content,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiAccordionDetails
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge(components, component, key)}
        </Suspense>
      ))}
    </MuiAccordionDetails>
  );
};

export default AccordionDetails;

AccordionDetails.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** Typography */
  content(props, propName, componentName) {
    const comps = ['Typography'];
    return validComponents(props, propName, componentName, comps);
  },

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

AccordionDetails.defaultProps = {
  rootClass: [],
  content: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
