import React, { createElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  validComponentsRequired,
  muiStringProp,
  validComponents,
} from '../../utils/customProps';
import MuiIconButton from '../MuiIconButton/MuiIconButton';
import MuiButton from '../MuiButton/MuiButton';
import MuiHeroHeader from '../MuiHeroHeader/MuiHeroHeader';
import Storyblok from '../../utils/Storyblok';
import MuiMobileTab from './components/MuiMobileTab/MuiMobileTab';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MuiMobileStepper = ({
  tabs,
  nextBtn,
  backBtn,
  rootClass,
  position,
  variant,
  autoplay,
  interval,
  geocode,
}) => {
  const components = {
    MuiIconButton,
    MuiButton,
    MuiHeroHeader,
  };

  const [state, setState] = useState({ activeStep: 0, autoplay });

  const maxSteps = tabs.length;

  const handleNext = () => {
    const nextStep = state.activeStep + 1;
    if (nextStep > maxSteps - 1) {
      return setState({ ...state, activeStep: 0 });
    }
    return setState({ ...state, activeStep: nextStep });
  };

  const handleBack = () => {
    const nextStep = state.activeStep - 1;
    if (nextStep < 0) {
      return setState({ ...state, activeStep: maxSteps - 1 });
    }
    return setState({ ...state, activeStep: nextStep });
  };

  const onChangeIndex = (step) => {
    setState({ ...state, activeStep: step });
  };

  const onMouseEnter = () => {
    if (autoplay) {
      setState({ ...state, autoplay: false });
    }
  };

  const onMouseLeave = () => {
    if (autoplay) {
      setState({ ...state, autoplay: true });
    }
  };

  const setLocation = (json) => {
    if (json.results.length) {
      tabs.forEach((tab, i) => {
        if (json.results[0].formatted_address.includes(tab.geocodeState)) {
          return setState({ activeStep: i });
        }
      });
    }
  };

  useEffect(() => {
    (async () => {
      if (geocode) {
        await window.muistoryblokgoogleapis.geocode(setLocation);
      }
    })();
  }, [geocode]);

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
        index={state.activeStep}
        onChangeIndex={onChangeIndex}
        enableMouseEvents
      >
        {tabs.map(tab => (
          <MuiMobileTab
            tab={tab.tab[0]}
          />
        ))}
      </AutoPlaySwipeableViews>

      <MobileStepper
        className={styles.root}
        steps={maxSteps}
        position={position}
        variant={variant}
        activeStep={state.activeStep}
        nextButton={(
          <>
            {next ? createElement(
              components[next.component],
              { ...next, onClick: handleNext },
            ) : null}
          </>
      )}
        backButton={(
          <>
            {back ? createElement(
              components[back.component], { ...back, onClick: handleBack },
            ) : null}
          </>
      )}
      />
    </div>
  );
};

export default MuiMobileStepper;

MuiMobileStepper.propTypes = {
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
  /** requires geocodeState if true tabs will geolocate to geocodeState if user is in that state */
  geocode: PropTypes.bool,
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
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
  /**
   * MuiIconButton,
  * MuiButton,
  */
  backBtn(props, propName, componentName) {
    const components = ['MuiIconButton', 'MuiButton'];
    return validComponentsRequired(props, propName, componentName, components, 1);
  },
};

MuiMobileStepper.defaultProps = {
  rootClass: [],
  position: 'static',
  variant: 'dots',
  autoplay: false,
  interval: 3000,
  geocode: false,
  nextBtn: [],
  backBtn: [],
  tabs: [],
};
