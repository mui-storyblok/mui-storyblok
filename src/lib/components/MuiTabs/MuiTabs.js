import React, {
  useState,
  useEffect,
  createElement,
} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Storyblok from '../../utils/Storyblok';
import MuiIcon from '../MuiIcon/MuiIcon';
import MuiGrid from '../MuiGrid/MuiGrid';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MuiTabs = ({
  rootClass,
  indicatorColor,
  orientation,
  scrollButtons,
  textColor,
  variant,
  tabs,
  autoplay,
  interval,
  geocode,
  height,
  justifyContent,
}) => {
  const components = {
    MuiGrid,
    MuiIcon,
  };

  console.log(tabs);

  const [state, setState] = useState({ value: 0, autoplay, tabsLength: tabs.length });
  const handleChange = (event, newValue) => {
    setState({ ...state, value: newValue });
  };

  const flexStyle = makeStyles(() => ({
    flexContainer: { justifyContent },
  }));

  const handleChangeIndex = () => {
    const tabsLength = tabs.length - 1;
    if (state.value >= tabsLength) {
      return handleChange({}, 0);
    }
    return handleChange({}, state.value);
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass, { flexContainer: { justifyContent: 'space-around' } });
  const flexClass = flexStyle();


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
          return setState({ value: i });
        }
        return null;
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

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        flexGrow: 1,
        display: orientation === 'vertical' ? 'flex' : 'block',
      }}
    >
      <Tabs
        value={state.value}
        className={styles.root}
        classes={flexClass}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        orientation={orientation}
        scrollButtons={scrollButtons}
        textColor={textColor}
        variant={variant}
      >
        {tabs.map((item, index) => (
          <Tab
            key={index}
            id={index}
            onClick={e => handleChange(e, index)}
            className={styles.root}
            label={item.label}
            disableFocusRipple={item.disableFocusRipple === 'true'}
            disableRipple={item.disableRipple}
            wrapped={item.wrapped}
            icon={(item.icon && item.icon[0] && <MuiIcon {...item.icon[0]} />)}
          />
        ))}
      </Tabs>
      <div style={{ height }}>
        {tabs.map((tab, index) => (
          <AutoPlaySwipeableViews
            key={index}
            index={state.value.toString()} // throws warrning for invalid prop in AutoPlay expected number but view will now display when value is 0
            onChangeIndex={handleChangeIndex}
            autoplay={autoplay}
            interval={typeof interval === 'string' ? Number(interval) : interval}
            enableMouseEvents
          >
            <div
              role="tabpanel"
              hidden={state.value !== index}
              style={{ overflow: 'hidden' }}
            >
              {tab.content.map((item, i) => createElement(
                components[item.component],
                Object.assign(item, { key: i }),
              ))}
            </div>
          </AutoPlaySwipeableViews>
        ))}
      </div>
    </div>
  );
};

export default MuiTabs;

MuiTabs.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop : 'secondary' | 'primary'
   * Determines the color of the indicator.
   */
  indicatorColor: PropTypes.string,
  /**
   * mui prop: 'horizontal' | 'vertical'
   * The tabs orientation (layout flow direction).
   */
  orientation: PropTypes.string,
  /**
   * Height of the tabs container.
   */
  height: PropTypes.string,
  /**
   * mui prop: 'auto' | 'desktop' | 'on' | 'off'
   * Determine behavior of scroll buttons when tabs are set to scroll:
   * - auto will only present them when not all the items are visible.
   * - desktop will only present them on medium and larger viewports.
   * - on will always present them.
   * - off will never present them.
   */
  scrollButtons: PropTypes.string,
  /**
   * mui prop: 'secondary' | 'primary' | 'inherit'
   * Determines the color of the Tab.
   */
  textColor: PropTypes.string,
  /**
   * mui prop:  'standard'| 'scrollable'| 'fullWidth'
   * Determines additional display behavior of the tabs:
   * - scrollable will invoke scrolling properties and allow for
    horizontally scrolling (or swiping) of the tab bar.
   * -fullWidth will make the tabs grow to use all the available space,
    which should be used for small views, like on mobile.
    - standard will render the default state.
   */
  variant: PropTypes.string,
  /**
   * Justify content flex styling for MuiTabs.
   * justifyContent: 'space-between' | 'center' | 'space-evenly' | 'space-around
   */
  justifyContent: PropTypes.string,
  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to incroment tabs: time in millaseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** requires geocodeState if true tabs will geolocate to geocodeState if user is in that state */
  geocode: PropTypes.bool,

  /** MuiTab */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
};

MuiTabs.defaultProps = {
  rootClass: [],
  tabs: [],
  indicatorColor: 'secondary',
  orientation: 'vertical',
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard',
  autoplay: false,
  interval: 3000,
  geocode: false,
  height: '300px',
  justifyContent: 'center',
};
