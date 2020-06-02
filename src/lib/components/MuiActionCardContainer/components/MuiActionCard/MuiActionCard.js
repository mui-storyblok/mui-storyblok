import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import styles from './MuiActionCard.module.scss';

const MuiActionCard = ({ header, icon, text, height, width }) => {

  return (
    <div style={{ height, width }} className="action-card__container">
      <div className="action-icon">
        <MuiIcon {...icon[0]} />
      </div>
      <div className="action-header">
        <MuiTypography {...header[0]} />
      </div>
      <div className="action-body">
        <MuiTypography {...text[0]} />
      </div>
    </div>
  );
};

export default MuiActionCard;

MuiActionCard.propTypes = {};

MuiActionCard.defaultProps = {};
