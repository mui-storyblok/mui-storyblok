import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import MuiIcon from '../../../MuiIcon/MuiIcon';
import Storyblok from '../../../../utils/Storyblok';

/**
   * MuiButton controls Dialog open state from true to false.
   * More docs and demos at https://material-ui.com/api/button/
   */

export const Button = ({
  rootClass,
  color,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  endIcon,
  fullWidth,
  size,
  startIcon,
  variant,
  buttonText,
  onClick,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiButton
      className={styles.root}
      color={color}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      endIcon={endIcon.length > 0 ? (
        <MuiIcon {...endIcon[0]} />
      ) : null}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon.length > 0 ? (
        <MuiIcon {...startIcon[0]} />
      ) : null}
      variant={variant}
      onClick={onClick}
      data-testid="muiButton"
    >
      {buttonText}
    </MuiButton>
  );
};

export default Button;

Button.propTypes = {
  /** button text */
  buttonText: PropTypes.string.isRequired,
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component
   * expecting array of string ex: ['color: black', 'font-Size: 20px' ]
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'default'| 'inherit'| 'primary'| 'secondary'
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
  color: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, no elevation is used.
   */
  disableElevation: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
   */
  disableFocusRipple: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the ripple effect will be disabled.
   * Without a ripple there is no styling for :focus-visible by default.
   * Be sure to highlight the element by applying separate styles with the focusVisibleClassName.
   */
  disableRipple: PropTypes.bool,
  /**
   * name of Icon uses MuiIcon
   * Element placed after the children. renders icon
   * any icon from https://material.io/resources/icons/?style=baseline
   * */
  endIcon: PropTypes.arrayOf(PropTypes.shape()),
  /**
   * mui prop: true | false
   * If true, the button will take up the full width of its container.
   */
  fullWidth: PropTypes.bool,
  /**
   * mui prop: 'small'| 'medium'| 'large'
   * The size of the button. small is equivalent to the dense button styling.
   * */
  size: PropTypes.string,
  /**
   * name of Icon uses MuiIcon
   * Element placed before the children. renders icon
   * any icon from https://material.io/resources/icons/?style=baseline
   * */
  startIcon: PropTypes.arrayOf(PropTypes.shape()),
  /**
   * mui prop: 'text' |'outlined'| 'contained
   * The variant to use.
   * */
  variant: PropTypes.string,
  /** not in storyblok passed down from parent component */
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  rootClass: [],
  color: 'secondary',
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  endIcon: [],
  fullWidth: true,
  size: 'medium',
  startIcon: [],
  variant: 'text',
};
