import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Storyblok from '../../../../utils/Storyblok';

const MuiTypography = lazy(() => import('../../../MuiTypography/MuiTypography'));

const MuiExpansionPanelDetails = ({ rootClass, content }) => {
  const components = {
    MuiTypography,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <ExpansionPanelDetails
      className={styles.root}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
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
