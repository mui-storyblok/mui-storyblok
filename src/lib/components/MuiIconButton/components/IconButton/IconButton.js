import React from 'react';
import PropTypes from 'prop-types';
import MuiIconButton from '@material-ui/core/IconButton';
import Storyblok from '../../../../utils/Storyblok';
import MuiIcon from '../../../MuiIcon/MuiIcon';


export const IconButton = ({
  color,
  disableFocusRipple,
  disableRipple,
  edge,
  size,
  rootClass,
  icon,
  onClick,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiIconButton
      onClick={onClick}
      className={styles.root}
      color={color}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      edge={edge === 'false' ? false : edge}
      size={size}
      data-testid="muiIconButton"
    >
      <MuiIcon {...icon[0]} />
    </MuiIconButton>
  );
};

export default IconButton;

IconButton.propTypes = {
/** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'default'| 'inherit'| 'primary'| 'secondary'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
  * mui prop: true | false
  * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
  */
  disableFocusRipple: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the ripple effect will be disabled.
   * */
  disableRipple: PropTypes.bool,
  /**
  * mui prop: 'start' | 'end' | false
  * If given, uses a negative margin to counteract the padding on one side
    (this is often helpful for aligning the left or right side of the icon with
    content above or below, without ruining the border size and shape).
  * */
  edge: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  /**
   * mui prop: 'small' | "medium"
   * The size of the button. small is equivalent to the dense button styling.
   * */
  size: PropTypes.string,

  /** MuiIcon Allowed maximum: 1 */
  icon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    rootClass: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,

  /** not in storyblok passed down from parent component */
  onClick: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  color: 'default',
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: 'medium',
  rootClass: [],
};
