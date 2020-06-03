import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import styles from './MuiActionCard.module.scss';

const MuiActionCard = ({
  header,
  icon,
  text,
  height,
  width,
}) => {
  return (
    <div style={{ height, width }} className={styles.actionCard}>
      <div className={styles.actionIcon}>
        <MuiIcon {...icon[0]} />
      </div>
      <div className={styles.actionHeader}>
        <MuiTypography {...header[0]} />
      </div>
      <div className={styles.actionBody}>
        <MuiTypography {...text[0]} />
      </div>
    </div>
  );
};

export default MuiActionCard;

MuiActionCard.propTypes = {
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiTypography
   */
  header: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiIcon
   */
  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiTypography
   */
  text: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * Passed down from ActionCardContainer
   * Height of the each Action Card.
   */
  height: PropTypes.string,
  /**
   * Passed down from ActionCardContainer
   * Width of the each Action Card.
   */
  width: PropTypes.string,
};

MuiActionCard.defaultProps = {
  height: '100px',
  width: '200px',
};
