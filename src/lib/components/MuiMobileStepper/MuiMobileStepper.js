import React, { createElement, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import MobileStepper from '@material-ui/core/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
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

  console.log(tabs);

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
   * Mui prop: 'bottom' | 'static' \ 'top'
   * Set the positioning type.
   */
  position: PropTypes.string,
  /**
   * Mui prop: 'dots' | 'progress' \ 'text'
   * Set the variant type.
   */
  variant: PropTypes.string,
  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to incroment tabs: time in millaseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** requires geocodeState if true tabs will geolocate to geocodeState if user is in that state */
  geocode: PropTypes.bool,
  /** MuiMobileTab */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
    geocodeState: PropTypes.string,
  })).isRequired,
  /**
   * MuiIconButton,
    MuiButton,
   */
  nextBtn: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * MuiIconButton,
  * MuiButton,
  */
  backBtn: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiMobileStepper.defaultProps = {
  rootClass: [],
  position: 'static',
  variant: 'dots',
  autoplay: false,
  interval: 3000,
  geocode: false,
};
