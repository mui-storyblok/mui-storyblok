import React, {
  createElement,
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import Storyblok from '../../utils/Storyblok';

const MuiExpansionPanelSummary = lazy(() => import('./components/MuiExpansionPanelSummary/MuiExpansionPanelSummary'));
const MuiExpansionPanelDetails = lazy(() => import('./components/MuiExpansionPanelDetails/MuiExpansionPanelDetails'));

const MuiExpansionPanel = ({
  rootClass,
  expansionPanelDetails,
  expansionPanelSummary,
  defaultExpanded,
  width,
}) => {
  const components = {
    MuiExpansionPanelDetails,
    MuiExpansionPanelSummary,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { width });

  const expand = defaultExpanded === 'true';
  const [expanded, setExpanded] = useState(expand);
  const handleChange = () => setExpanded(!expanded);

  const panelDetails = expansionPanelDetails[0];
  const panelSummary = expansionPanelSummary[0];
  return (
    <Suspense fallback={<div />}>
      <ExpansionPanel
        className={styles.root}
        expanded={expanded}
        onChange={handleChange}
      >
        {createElement(components[panelSummary.component], panelSummary)}
        {createElement(components[panelDetails.component], panelDetails)}
      </ExpansionPanel>
    </Suspense>

  );
};


export default MuiExpansionPanel;

MuiExpansionPanel.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** if true pannale is expanded on load */
  defaultExpanded: PropTypes.bool,
  /** width of panel */
  width: PropTypes.string,

  /** MuiExpansionPanelSummary Allowed maximum: 1 */
  expansionPanelSummary: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiExpansionPanelDetails Allowed maximum: 1 */
  expansionPanelDetails: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiExpansionPanel.defaultProps = {
  width: '100%',
  defaultExpanded: false,
  rootClass: [],
};
