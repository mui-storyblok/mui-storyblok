import React, {
  useState,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import { MobileStepper as MuiMobileStepper } from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
  validComponentsRequired,
  muiStringProp,
  validComponents,
} from 'lib/utils/customProps';
import Storyblok from 'lib/utils/Storyblok';
import { renderComponentsWithBridge } from 'lib/utils/customComponents';
import MobileTab from './components/MobileTab/MobileTab';

/* istanbul ignore next */
const IconButton = lazy(() => import('lib/components/PageGrid/molecules/IconButton/IconButton'));
/* istanbul ignore next */
const Button = lazy(() => import('lib/components/PageGrid/molecules/Button/Button'));

const components = {
  IconButton,
  Button,
};

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MobileStepper = ({
  tabs,
  nextBtn,
  backBtn,
  rootClass,
  position,
  variant,
  autoplay,
  interval,
  storyblokClass,
  dataBlokC,
  dataBlokUid,
  tabIndex,
}) => {
  const [state, setState] = useState({ autoplay });
  const [activeStep, setActiveStep] = useState(tabIndex);

  const maxSteps = tabs.length;

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
    if (autoplay) {
      setState({ autoplay: false });
    }
  };

  const onMouseLeave = () => {
    if (autoplay) {
      setState({ autoplay: true });
    }
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const back = backBtn[0];
  const next = nextBtn[0];
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ width: '100%' }}
      className={storyblokClass}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      <AutoPlaySwipeableViews
        autoplay={state.autoplay}
        interval={typeof interval === 'string' ? Number(interval) : interval}
        index={activeStep}
        onChangeIndex={onChangeIndex}
        enableMouseEvents
      >
        {tabs.map(tab => (
          <MobileTab
            tab={tab.tab[0]}
          />
        ))}
      </AutoPlaySwipeableViews>

      <MuiMobileStepper
        id="MuiMobileStepper"
        className={styles.root}
        steps={maxSteps}
        position={position}
        variant={variant}
        activeStep={activeStep}
        nextButton={next ? (
          <Suspense fallback={<></>}>
            {renderComponentsWithBridge(
              components,
              { ...next, onClick: handleNext },
            )}
          </Suspense>
        ) : null}
        backButton={back ? (
          <Suspense fallback={<></>}>
            {renderComponentsWithBridge(
              components,
              { ...back, onClick: handleBack },
            )}
          </Suspense>
        ) : null}
      />
    </div>
  );
};

export default MobileStepper;

MobileStepper.propTypes = {
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
  /** MuiMobileTab */
  tabs(props, propName, componentName) {
    const comps = ['MobileTab'];
    return validComponents(props, propName, componentName, comps);
  },
  /**
   * IconButton,
   * Button,
   */
  nextBtn(props, propName, componentName) {
    const comps = ['IconButton', 'Button'];
    return validComponentsRequired(props, propName, componentName, comps, 1);
  },
  /**
  * IconButton,
  * Button,
  */
  backBtn(props, propName, componentName) {
    const comps = ['IconButton', 'Button'];
    return validComponentsRequired(props, propName, componentName, comps, 1);
  },

  /** pass down and will set the current tab */
  tabIndex: PropTypes.number,

  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

MobileStepper.defaultProps = {
  rootClass: [],
  position: 'static',
  variant: 'dots',
  autoplay: false,
  interval: 3000,
  nextBtn: [],
  backBtn: [],
  tabs: [],
  tabIndex: 0,
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
