import React, {
  createElement,
} from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Storyblok from 'lib/utils/Storyblok';
import MuiIcon from 'lib/components/MuiIcon/MuiIcon';
import TabPannal from './components/TabPannal/TabPannal';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MuiTab = ({
  label,
  rootClass,
  disableFocusRipple,
  disableRipple,
  icon,
  wrapped,
  value,
  content,
  index,
  handleChange,
  tabsLength,
  handleChangeIndex,
  autoplay,
  interval,
  tabPannalId,
}) => {
  const components = {
    MuiIcon,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiIcon = icon[0];
  const tabs = Array.apply(null, Array(tabsLength));

  return (
    <div id={index}>
      <Tab
        id={index}
        // value={index} // bug with currently selected so removing it for now
        value={false}
        onClick={e => handleChange(e, index)}
        className={styles.root}
        label={label}
        disableFocusRipple={disableFocusRipple === 'true'}
        disableRipple={disableRipple}
        wrapped={wrapped}
        icon={(
          <>
            {muiIcon
              && createElement(components[muiIcon.component], muiIcon)
            }
          </>
        )}
      />
      <AutoPlaySwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
        autoplay={autoplay}
        interval={typeof interval === 'string' ? Number(interval) : interval}
      >
        {/*
          I do not like this but the only way I could think to avoid
          Warning: react-swipeable-view: the new index: 2 is out of bounds: [0-1]
          render to TabPannal will render to react portal else we will render a empty div
        */}
        {tabs.map((item, i) => {
          if (i === 0) {
            return (
              <TabPannal
                key={i}
                tabPannalId={tabPannalId}
                content={content}
                value={value}
                index={index}
              />
            );
          }
          return <div key={i} />;
        })}
      </AutoPlaySwipeableViews>
    </div>
  );
};

export default MuiTab;

MuiTab.propTypes = {
  /**
   * mui prop sting for tab lable
   */
  label: PropTypes.string.isRequired,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
   */
  disableFocusRipple: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * mui prop: true | false
   * If true, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /**
   * The icon element.
   * MuiIcon Allowed maximum: 1 */
  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })),
  /**
   * mui prop : true | false
   * Tab labels appear in a single row. They can use a second line if needed.
   */
  wrapped: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),

  // /** autoplay will incroment tabs by a interval */
  // autoplay: PropTypes.bool,
  // /** interval to incroment tabs: time in millaseconds */
  // interval: PropTypes.string,

  /** MuiGrid */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,


  /** autoplay will incroment tabs by a interval */
  autoplay: PropTypes.bool,
  /** interval to incroment tabs: time in millaseconds */
  interval: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** passed down form parent MuiTab the current value or selected index in tabs */
  value: PropTypes.number.isRequired,
  /** passed down form parent MuiTab callback to set the current value */
  handleChange: PropTypes.func.isRequired,
  /** passed down form parent MuiTab index of tab that is rendered */
  index: PropTypes.number.isRequired,
  /** passed down form parent MuiTab to make a array for AutoPlaySwipeableViews to use */
  tabsLength: PropTypes.number.isRequired,
  /** passed down form parent MuiTab callback to set the current value */
  handleChangeIndex: PropTypes.func.isRequired,
  /** tabPannalId uuid to render tabs to correct portal */
  tabPannalId: PropTypes.string.isRequired,
};

MuiTab.defaultProps = {
  rootClass: [],
  icon: [],
  disableFocusRipple: false,
  disableRipple: false,
  wrapped: false,
  autoplay: false,
  interval: 3000,
};
