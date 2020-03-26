import React, {
  useState, createElement, lazy, Suspense,
} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Grid from '@material-ui/core/Grid';
import Storyblok from '../../utils/Storyblok';

const MuiTab = lazy(() => import('./components/MuiTab/MuiTab'));

const MuiTabs = ({
  rootClass,
  indicatorColor,
  orientation,
  scrollButtons,
  textColor,
  variant,
  tabs,
}) => {
  const components = {
    MuiTab,
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  const positionAppBar = position => {
    if (position === 'vertical') {
      return 'row';
    }
    if (position === 'horizontal') {
      return 'row';
    }

    if (position === 'bottom') {
      return 'column-reverse';
    }
  };

  return (
    <Grid
      // direction={orientation === 'vertical' ? 'row' : 'column'}
      container
      direction={positionAppBar(orientation)}
      justify="center"
      alignItems="center"
    >
      <Grid
        item
        xs={orientation === 'vertical' ? 2 : 12}
        style={{ width: '100%' }}
      >
        <AppBar
          position="relative"
          style={{ width: '100%' }}
        >
          <Suspense fallback={<div />}>
            <Tabs
              // value={value} // bug with currently selected so removing it for now
              value={false}
              onChange={handleChange}
              className={styles.root}
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
                  value,
                  handleChange,
                }),
              ))}
            </Tabs>
          </Suspense>
        </AppBar>
      </Grid>
      <Grid item xs={orientation === 'vertical' ? 10 : 12}>
        <div id="TabPannal" style={{ }} />
      </Grid>
    </Grid>
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
- auto will only present them when not all the items are visible. - desktop will only present them on medium and larger viewports. - on will always present them. - off will never present them.
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
- scrollable will invoke scrolling properties and allow for horizontally scrolling (or swiping) of the tab bar. -fullWidth will make the tabs grow to use all the available space, which should be used for small views, like on mobile. - standard will render the default state.
   */
  variant: PropTypes.string,

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
};
