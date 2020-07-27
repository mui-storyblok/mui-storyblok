import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import { Accordion } from '@material-ui/core';
import { validComponents, componentsRequired, dimensionProp } from '../../utils/customProps';
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
    let error;
    error = componentsRequired(props, propName, componentName, 1); if (error) return error;
    if (error) return error;
    const components = ['MuiAccordionSummary'];
    error = validComponents(props, propName, componentName, components);
    if (error) return error;
    return undefined;
  },
  /** MuiAccordionDetails Allowed maximum: 1 */
  accordionDetails(props, propName, componentName) {
    let error;
    error = componentsRequired(props, propName, componentName, 1); if (error) return error;
    if (error) return error;
    const components = ['MuiAccordionDetails'];
    error = validComponents(props, propName, componentName, components);
    if (error) return error;
    return undefined;
  },
};

MuiAccordion.defaultProps = {
  width: '100%',
  defaultExpanded: false,
  rootClass: [],
  accordionSummary: [],
  accordionDetails: [],
};
