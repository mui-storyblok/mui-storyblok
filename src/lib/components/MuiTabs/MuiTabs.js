import React, {
  useState, createElement,
} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Storyblok from '../../utils/Storyblok';
// import styles from './MuiTabs.module.scss';

import MuiTab from './components/MuiTab/MuiTab';
// const DesktopTabs = lazy(() => import('./components/DesktopTabs/DesktopTabs'));


// make string with uuid to render tabs to correct portal
const tabPannalId = `${[...Array(10)].map(i => (~~(Math.random() * 36)).toString(36)).join('')}TabPannal`;

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
}) => {
  const components = {
    MuiTab,
  };

  const [state, setState] = useState({ value: 0, autoplay, tabsLength: tabs.length });

  const handleChange = (event, newValue) => {
    setState({ ...state, value: newValue });
  };

  const handleChangeIndex = () => {
    const tabsLength = tabs.length - 1;
    if (state.value >= tabsLength) {
      return handleChange({}, 0);
    }
    return handleChange({}, state.value + 1);
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);


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
          // value={state.value} // bug with currently selected so removing it for now
        className={styles.root}
        value={false}
        onChange={handleChange}
        indicatorColor={indicatorColor}
        orientation={orientation}
        scrollButtons={scrollButtons}
        textColor={textColor}
        variant={variant}
      >
        {tabs.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, {
            key: index,
            index,
            autoplay,
            interval,
            value: state.value,
            handleChangeIndex,
            handleChange,
            tabPannalId,
            tabsLength: state.tabsLength,
          }),
        ))}
      </Tabs>

      <div style={{ height: '100%', width: '100%' }} id={tabPannalId} />
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
  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to incroment tabs: time in millaseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** MuiTabItem */
  tabs: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTabs.defaultProps = {
  rootClass: [],
  indicatorColor: 'secondary',
  orientation: 'vertical',
  scrollButtons: 'auto',
  textColor: 'inherit',
  variant: 'standard',
  autoplay: false,
  interval: 3000,
};
