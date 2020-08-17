import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@material-ui/core';
import { dimensionProp, validComponentsRequired } from '../../utils/customProps';
import Storyblok from '../../utils/Storyblok';
import MuiAccordionSummary from './components/MuiAccordionSummary/MuiAccordionSummary';
import MuiAccordionDetails from './components/MuiAccordionDetails/MuiAccordionDetails';

const MuiAccordion = ({
  rootClass,
  accordionDetails,
  accordionSummary,
  defaultExpanded,
  width,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { width });

  const expand = defaultExpanded === 'true';
  const [expanded, setExpanded] = useState(expand);
  const handleChange = () => setExpanded(!expanded);

  const panelSummary = accordionSummary[0];
  const panelDetails = accordionDetails[0];
  return (
    <Accordion
      className={styles.root}
      expanded={expanded}
      onChange={handleChange}
    >
      <MuiAccordionSummary {...panelSummary} />
      <MuiAccordionDetails {...panelDetails} />
    </Accordion>
  );
};


export default MuiAccordion;

MuiAccordion.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** if true pannale is expanded on load */
  defaultExpanded: PropTypes.bool,
  /** width of panel */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /** MuiAccordionSummary Allowed maximum: 1 */
  accordionSummary(props, propName, componentName) {
    const components = ['MuiAccordionSummary'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
  /** MuiAccordionDetails Allowed maximum: 1 */
  accordionDetails(props, propName, componentName) {
    const components = ['MuiAccordionDetails'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

MuiAccordion.defaultProps = {
  width: '100%',
  defaultExpanded: false,
  rootClass: [],
  accordionSummary: [],
  accordionDetails: [],
};
