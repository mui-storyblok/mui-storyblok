import React from 'react';
import PropTypes from 'prop-types';
import HeroHeader from 'lib/components/PageGrid/templates/HeroHeader/HeroHeader';

const MuiMobileTab = ({
  tab,
}) => (
  <div style={{ overflow: 'hidden' }}>
    <HeroHeader {...tab} />
  </div>
);

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
