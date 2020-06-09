/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import styles from './MuiActionCard.module.scss';
import StoryBlok from '../../../../utils/Storyblok';

const MuiActionCard = ({
  header,
  icon,
  text,
  height,
  width,
  rootClass,
  redirectRoute,
  history,
}) => {
  const classes = StoryBlok.anchorOrginToObj(rootClass);
  const onClick = async () => history.push(redirectRoute);

  return (
    <div
      style={{ height, width, ...classes }}
      className={styles.actionCard}
      onClick={onClick}
    >
      <div className={styles.actionHeader}>
        <MuiIcon {...icon[0]} />
        <MuiTypography {...header[0]} />
      </div>
      <div className={styles.actionBody}>
        <MuiTypography {...text[0]} />
      </div>
    </div>
  );
};

export default withRouter(MuiActionCard);

MuiActionCard.propTypes = {
  /**
   * storyblok multiselect of css classes
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
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
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
  /** react history not a storyblok prop */
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
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
  rootClass: [],
};
