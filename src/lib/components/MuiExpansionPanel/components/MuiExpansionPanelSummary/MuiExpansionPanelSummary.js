import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Storyblok from '../../../../utils/Storyblok';
import MuiExpansionPanelTypography from '../MuiExpansionPanelTypography/MuiExpansionPanelTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';

const MuiExpansionPanelSummary = ({
  rootClass,
  content,
  expandIcon,
}) => {
  const components = {
    MuiExpansionPanelTypography,
    MuiIcon,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ExpansionPanelSummary
      className={styles.root}
      expandIcon={createElement(components[expandIcon[0].component], expandIcon[0])}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </ExpansionPanelSummary>
  );
};

export default MuiExpansionPanelSummary;

MuiExpansionPanelSummary.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /** MuiIcon limit 1 */
  expandIcon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** MuiTypography */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiExpansionPanelSummary.defaultProps = {
  rootClass: [],
};
