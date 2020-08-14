import React, { createElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useSetGeoCode } from '../../utils/geoLocate';
import {
  validComponentsRequired,
  muiStringProp,
  validComponents,
} from '../../utils/customProps';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import MuiButton from '../MuiButton/MuiButton';
import MuiHeroHeader from '../MuiHeroHeader/MuiHeroHeader';
import Storyblok from '../../utils/Storyblok';
import MuiMobileTab from '../MuiMobileStepper/components/MuiMobileTab/MuiMobileTab';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MuiGeoLocationMobileStepper = ({
  tabs,
  nextBtn,
  backBtn,
  rootClass,
  position,
  variant,
  autoplay,
  interval,
  googleApiKey,
}) => {
  const components = {
    MuiIconButton,
    MuiButton,
    MuiHeroHeader,
  };
  const [state, setState] = useState({ autoplay });
  const [activeStep, setActiveStep] = useState(0);
  const [googleKey, setGoogleApiKey] = useState(googleApiKey);

  const maxSteps = tabs.length;

  useEffect(() => {
    setGoogleApiKey(googleApiKey);
  }, [googleApiKey]);

  const handleNext = () => {
    const nextStep = activeStep + 1;
    if (nextStep > maxSteps - 1) {
      return setActiveStep(0);
    }
    return setActiveStep(nextStep);
  };

  const handleBack = () => {
    const nextStep = activeStep - 1;
    if (nextStep < 0) {
      return setActiveStep(maxSteps - 1);
    }
    return setActiveStep(nextStep);
  };

  const onChangeIndex = (step) => {
    setActiveStep(step);
  };

  const onMouseEnter = () => {
    if (autoplay) setState({ autoplay: false });
  };

  const onMouseLeave = () => {
    if (autoplay) setState({ autoplay: true });
  };

  useSetGeoCode(true, tabs, setActiveStep, googleKey);

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const back = backBtn[0];
  const next = nextBtn[0];
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: '100%' }}
    >
      <AutoPlaySwipeableViews
        autoplay={state.autoplay}
        interval={typeof interval === 'string' ? Number(interval) : interval}
        index={activeStep}
        onChangeIndex={onChangeIndex}
        enableMouseEvents
      >
        {tabs.map(tab => (
          <MuiMobileTab tab={tab.tab[0]} />
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        className={styles.root}
        steps={maxSteps}
        position={position}
        variant={variant}
        activeStep={activeStep}
        nextButton={(
          <>
            {next
              ? createElement(components[next.component], {
                ...next,
                onClick: handleNext,
              })
              : null}
          </>
        )}
        backButton={(
          <>
            {back
              ? createElement(components[back.component], {
                ...back,
                onClick: handleBack,
              })
              : null}
          </>
        )}
      />
    </div>
  );
};

export default MuiGeoLocationMobileStepper;

MuiGeoLocationMobileStepper.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Mui prop: 'bottom', 'static', 'top'
   * Set the positioning type.
   */
  position(props, propName, componentName) {
    const validProps = ['bottom', 'static', 'top'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * Mui prop: 'dots', 'progress', 'text'
   * Set the variant type.
   */
  variant(props, propName, componentName) {
    const validProps = ['dots', 'progress', 'text'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to incroment tabs: time in millaseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** key for googleApisKey to use geocode */
  googleApiKey: PropTypes.string,
  /** MuiMobileTab */
  tabs(props, propName, componentName) {
    const components = ['MuiMobileTab'];
    return validComponents(props, propName, componentName, components);
  },
  /**
   * MuiIconButton,
    MuiButton,
   */
  nextBtn(props, propName, componentName) {
    const components = ['MuiIconButton', 'MuiButton'];
    return validComponentsRequired(
      props,
      propName,
      componentName,
      components,
      1,
    );
  },
  /**
   * MuiIconButton,
   * MuiButton,
   */
  backBtn(props, propName, componentName) {
    const components = ['MuiIconButton', 'MuiButton'];
    return validComponentsRequired(
      props,
      propName,
      componentName,
      components,
      1,
    );
  },
};

MuiGeoLocationMobileStepper.defaultProps = {
  rootClass: [],
  position: 'static',
  variant: 'dots',
  autoplay: false,
  interval: 3000,
  nextBtn: [],
  backBtn: [],
  tabs: [],
  googleApiKey: '',
};
