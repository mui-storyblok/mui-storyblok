import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Storyblok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';
import MuiExpansionPanelTypography from '../MuiExpansionPanelTypography/MuiExpansionPanelTypography';

const MuiExpansionPanelDetails = ({ rootClass, content }) => {
  const components = {
    MuiExpansionPanelTypography,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ExpansionPanelDetails
      className={styles.root}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </ExpansionPanelDetails>
  );
};

export default MuiExpansionPanelDetails;

MuiExpansionPanelDetails.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** MuiTypography */
  content(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiExpansionPanelDetails.defaultProps = {
  rootClass: [],
  content: [],
};
