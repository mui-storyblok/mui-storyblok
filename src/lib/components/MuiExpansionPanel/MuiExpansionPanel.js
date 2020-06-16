import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import { validComponents, componentsRequired, dimensionProp } from '../../utils/customProps';
import Storyblok from '../../utils/Storyblok';
import MuiExpansionPanelSummary from './components/MuiExpansionPanelSummary/MuiExpansionPanelSummary';
import MuiExpansionPanelDetails from './components/MuiExpansionPanelDetails/MuiExpansionPanelDetails';

const MuiExpansionPanel = ({
  rootClass,
  expansionPanelDetails,
  expansionPanelSummary,
  defaultExpanded,
  width,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { width });

  const expand = defaultExpanded === 'true';
  const [expanded, setExpanded] = useState(expand);
  const handleChange = () => setExpanded(!expanded);

  const panelSummary = expansionPanelSummary[0];
  const panelDetails = expansionPanelDetails[0];
  return (
    <ExpansionPanel
      className={styles.root}
      expanded={expanded}
      onChange={handleChange}
    >
      <MuiExpansionPanelSummary {...panelSummary} />
      <MuiExpansionPanelDetails {...panelDetails} />
    </ExpansionPanel>
  );
};


export default MuiExpansionPanel;

MuiExpansionPanel.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** if true pannale is expanded on load */
  defaultExpanded: PropTypes.bool,
  /** width of panel */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /** MuiExpansionPanelSummary Allowed maximum: 1 */
  expansionPanelSummary(props, propName, componentName) {
    let error;
    error = componentsRequired(props, propName, componentName, 1); if (error) return error;
    if (error) return error;
    const components = ['MuiExpansionPanelSummary'];
    error = validComponents(props, propName, componentName, components);
    if (error) return error;
    return undefined;
  },
  /** MuiExpansionPanelDetails Allowed maximum: 1 */
  expansionPanelDetails(props, propName, componentName) {
    let error;
    error = componentsRequired(props, propName, componentName, 1); if (error) return error;
    if (error) return error;
    const components = ['MuiExpansionPanelDetails'];
    error = validComponents(props, propName, componentName, components);
    if (error) return error;
    return undefined;
  },
};

MuiExpansionPanel.defaultProps = {
  width: '100%',
  defaultExpanded: false,
  rootClass: [],
  expansionPanelSummary: [],
  expansionPanelDetails: [],
};
