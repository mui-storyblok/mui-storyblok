/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import StoryBlok from 'lib/utils/Storyblok';
import appRedirect from 'lib/utils/appRedirect';
import {
  dimensionProp,
  validComponents,
} from 'lib/utils/customProps';

import Typography from 'lib/components/PageGrid/molecules/Typography/Typography';
import Icon from 'lib/components/PageGrid/atoms/Icon/Icon';
import styles from './ActionCard.module.scss';

export const ActionCard = ({
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
        <Icon {...icon[0]} />
        <Typography {...header[0]} />
      </div>
      <div className={styles.actionBody}>
        <Typography {...text[0]} />
      </div>
    </div>
  );
};

export default ActionCard;

ActionCard.propTypes = {
  /**
   * storyblok multiselect of css classes
  */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Cards passed to ActionCard to render
   * Component: MuiTypography
   */
  header(props, propName, componentName) {
    const components = ['MuiTypography'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /**
   * Cards passed to ActionCard to render
   * Component: MuiIcon
   */
  icon(props, propName, componentName) {
    const components = ['MuiIcon'];
    return validComponents(props, propName, componentName, components, 1);
  },
  /** redirect route */
  redirectRoute: PropTypes.string.isRequired,
  /**
   * Cards passed to ActionCard to render
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

ActionCard.defaultProps = {
  height: '100px',
  width: '200px',
  rootClass: [],
  text: [],
  icon: [],
  header: [],
};
