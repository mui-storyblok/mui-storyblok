import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Storyblok from '../../../../utils/Storyblok';
import MuiTypography from '../../../MuiTypography/MuiTypography';

const MuiExpansionPanelDetails = ({ rootClass, content }) => {
  const components = {
    MuiTypography,
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
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiExpansionPanelDetails.defaultProps = {
  rootClass: [],
};
