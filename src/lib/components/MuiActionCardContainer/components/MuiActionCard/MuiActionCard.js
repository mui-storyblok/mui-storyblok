/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import styles from './MuiActionCard.module.scss';
import StoryBlok from '../../../../utils/Storyblok';
import appRedirect from '../../../../utils/appRedirect';
import {
  dimensionProp,
  validComponents,
} from '../../../../utils/customProps';

export const MuiActionCard = ({
  header,
  icon,
  text,
  height,
  width,
  rootClass,
  redirectRoute,
}) => {
  const classes = StoryBlok.anchorOrginToObj(rootClass);
  const onClick = async () => appRedirect(redirectRoute);

  return (
    <div
      style={{ height, width, ...classes }}
      className={styles.actionCard}
      onClick={onClick}
      id="actionCard-test"
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

export default MuiActionCard;

MuiActionCard.propTypes = {
  /**
   * storyblok multiselect of css classes
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiTypography
   */
  header(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiIcon
   */
  icon(props, propName, componentName) {
    const components = ['MuiIcon'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
  /**
   * Cards passed to MuiActionCard to render
   * Component: MuiTypography
   */
  text(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /**
   * Passed down from ActionCardContainer
   * Height of the each Action Card.
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Passed down from ActionCardContainer
   * Width of the each Action Card.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
};

MuiActionCard.defaultProps = {
  height: '100px',
  width: '200px',
  rootClass: [],
  text: [],
  icon: [],
  header: [],
};
