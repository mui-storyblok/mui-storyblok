import React from 'react';
import PropTypes from 'prop-types';
import MuiHeroHeader from '../../../MuiHeroHeader/MuiHeroHeader';

const MuiMobileTab = ({
  tab,
}) => (<MuiHeroHeader {...tab} />);

export default MuiMobileTab;

MuiMobileTab.propTypes = {

  /** State you would like to show if user is in this state */
  geocodeState: PropTypes.string,

  /** props to spread to  */
  tab: PropTypes.shape.isRequired,
};

MuiMobileTab.defaultProps = {

  geocodeState: '',
};
