import React, {
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import { Accordion as MuiAccordion } from '@material-ui/core';
import { dimensionProp, validComponentsRequired } from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';

const AccordionSummary = lazy(() => import('./components/AccordionSummary/AccordionSummary'));
const AccordionDetails = lazy(() => import('./components/AccordionDetails/AccordionDetails'));

const Accordion = ({
  rootClass,
  accordionDetails,
  accordionSummary,
  defaultExpanded,
  width,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { width });
  const [expanded, setExpanded] = useState(defaultExpanded);
  const handleChange = () => setExpanded(!expanded);

  const panelSummary = accordionSummary[0];
  const panelDetails = accordionDetails[0];
  return (
    <MuiAccordion
      expanded={expanded}
      onChange={handleChange}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <Suspense fallback={<></>}>
        <AccordionSummary {...panelSummary} />
      </Suspense>
      <Suspense fallback={<></>}>
        <AccordionDetails {...panelDetails} />
      </Suspense>
    </MuiAccordion>
  );
};


export default Accordion;

Accordion.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** if true pannale is expanded on load */
  defaultExpanded: PropTypes.bool,
  /** width of panel */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /** AccordionSummary Allowed maximum: 1 */
  accordionSummary(props, propName, componentName) {
    const components = ['AccordionSummary'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
  /** AccordionDetails Allowed maximum: 1 */
  accordionDetails(props, propName, componentName) {
    const components = ['AccordionDetails'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

Accordion.defaultProps = {
  width: '100%',
  defaultExpanded: false,
  rootClass: [],
  accordionSummary: [],
  accordionDetails: [],
};
