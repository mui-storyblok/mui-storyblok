import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Storyblok from '../../../../utils/Storyblok';
import MuiExpansionPanelTypography from '../MuiExpansionPanelTypography/MuiExpansionPanelTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import { validComponents } from '../../../../utils/customProps';
import { renderComponents } from '../../../../utils/customComponents';

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
      {content.map((component, key) => renderComponents(components, component, key))}
    </ExpansionPanelSummary>
  );
};

export default MuiExpansionPanelSummary;

MuiExpansionPanelSummary.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** MuiIcon limit 1 */
  expandIcon(props, propName, componentName) {
    const components = ['MuiIcon'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** MuiTypography */
  content(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiExpansionPanelSummary.defaultProps = {
  rootClass: [],
  content: [],
  expandIcon: [],
};
