import React, {
  createElement,
  lazy,
  Suspense,
} from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Storyblok from '../../../../utils/Storyblok';

const MuiIcon = lazy(() => import('../../../MuiIcon/MuiIcon'));
const TabPannal = lazy(() => import('./components/TabPannal/TabPannal'));

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
}) => {
  const components = {
    MuiIcon,
  };
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const muiIcon = icon[0];

  return (
    <>
      <Tab
        id={index}
        // value={index} // bug with currently selected so removing it for now
        onClick={e => handleChange(e, index)}
        className={styles.root}
        label={label}
        disableFocusRipple={disableFocusRipple === 'true'}
        disableRipple={disableRipple}
        wrapped={wrapped}
        icon={(
          <Suspense fallback={<div />}>
            {muiIcon
          && createElement(components[muiIcon.component], muiIcon)
        }
          </Suspense>
        )}
      />
      <TabPannal
        content={content}
        value={value}
        index={index}
      />
    </>
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

  /** MuiGrid */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** passed down form parent MuiTab */
  value: PropTypes.number.isRequired,
  /** passed down form parent MuiTab */
  handleChange: PropTypes.func.isRequired,
  /** passed down form parent MuiTab */
  index: PropTypes.number.isRequired,
};

MuiTab.defaultProps = {
  rootClass: [],
  icon: [],
  disableFocusRipple: false,
  disableRipple: false,
  wrapped: false,
};
