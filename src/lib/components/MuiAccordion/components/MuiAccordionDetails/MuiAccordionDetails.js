import React from 'react';
import PropTypes from 'prop-types';
import { AccordionDetails } from '@material-ui/core';
import Storyblok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';
import MuiAccordionTypography from '../MuiAccordionTypography/MuiAccordionTypography';

const MuiAccordionDetails = ({ rootClass, content }) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <AccordionDetails
      className={styles.root}
    >
      <MuiAccordionTypography {...content[0]} />
    </AccordionDetails>
  );
};

export default MuiAccordionDetails;

MuiAccordionDetails.propTypes = {
  /** storyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** MuiTypography */
  content(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiAccordionDetails.defaultProps = {
  rootClass: [],
  content: [],
};
