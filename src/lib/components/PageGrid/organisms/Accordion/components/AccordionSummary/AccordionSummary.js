import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { AccordionSummary as MuiAccordionSummary } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { validComponents } from 'lib/utils/customProps';
import { renderComponentsWithBridg } from 'lib/utils/customComponents';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';

const Typography = lazy(() => import('lib/components/PageGrid/molecules/Typography/Typography'));

const components = {
  Typography,
};

const AccordionSummary = ({
  rootClass,
  content,
  expandIcon,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiAccordionSummary
      expandIcon={<Icon {...expandIcon[0]} />}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridg(components, component, key)}
        </Suspense>
      ))}
    </MuiAccordionSummary>
  );
};

export default AccordionSummary;

AccordionSummary.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** Icon limit 1 */
  expandIcon(props, propName, componentName) {
    const comps = ['Icon'];
    return validComponents(props, propName, componentName, comps, 1);
  },
  /** Typography */
  content(props, propName, componentName) {
    const comps = ['Typography'];
    return validComponents(props, propName, componentName, comps);
  },
};

AccordionSummary.defaultProps = {
  rootClass: [],
  content: [],
  expandIcon: [],
};
