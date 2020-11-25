import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Card as MuiCard } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import { validComponents, dimensionProp } from 'lib/utils/customProps';

/* istanbul ignore next */
const CardActions = lazy(() => import('./components/CardActions/CardActions'));
/* istanbul ignore next */
const CardContent = lazy(() => import('./components/CardContent/CardContent'));
/* istanbul ignore next */
const CardHeader = lazy(() => import('./components/CardHeader/CardHeader'));
/* istanbul ignore next */
const CardMedia = lazy(() => import('./components/CardMedia/CardMedia'));

const components = {
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
};

const Card = ({
  rootClass,
  raised,
  content,
  elevation,
  square,
  variant,
  height,
  width,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass, { height, width });
  return (
    <MuiCard
      raised={raised}
      variant={variant}
      elevation={+elevation}
      square={square}
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {content.map((component, key) => (
        <Suspense fallback={<></>}>
          {renderComponentsWithBridge({ ...components }, component, key)}
        </Suspense>
      ))}
    </MuiCard>
  );
};

export default Card;

Card.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the card will use raised styling.
   */
  raised: PropTypes.bool,
  /**
   * It accepts values between 0 and 24 inclusive.
   * Shadow depth, corresponds to dp in the spec.
   */
  elevation: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, rounded corners are disabled.
   */
  square: PropTypes.bool,
  /**
   * mui prop: 'elevation' | 'outlined'
   * The variant to use.
   */
  variant: PropTypes.string,
  /**
   * Height of the card.
   */
  height(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },
  /**
   * Width of the card.
   */
  width(props, propName, componentName) {
    return dimensionProp(props, propName, componentName);
  },

  /**
   * Content passed to render
   * can also render any customCompnent passed in
   * components:  CardActions,
    CardContent,
    CardHeader,
    CardMedia,
   */
  content(props, propName, componentName) {
    const comps = [
      'CardActions',
      'CardContent',
      'CardHeader',
      'CardMedia',
    ];
    return validComponents(props, propName, componentName, comps);
  },
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

Card.defaultProps = {
  raised: false,
  rootClass: [],
  height: '100%',
  width: '100%',
  content: [],
  elevation: 1,
  square: false,
  variant: 'elevation',
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
