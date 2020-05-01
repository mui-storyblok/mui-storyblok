import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import MuiButton from '../MuiButton/MuiButton';
import MuiIconButton from '../MuiIconButton/MuiIconButton';

const MuiButtonSnackbar = ({
  rootClass,
  button,
  message,
  anchorOrigin,
  autoHideDuration,
  disableWindowBlurListener,
  resumeHideDuration,
  closingIcon,
}) => {
  const [open, setOpen] = useState(false);
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const anchorOriginObj = StoryBlok.anchorOrginToObj(anchorOrigin);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <MuiButton {...button[0]} onClick={handleClick} />
      <Snackbar
        className={styles.root}
        message={message}
        anchorOrigin={anchorOriginObj}
        autoHideDuration={+autoHideDuration}
        disableWindowBlurListener={disableWindowBlurListener}
        key={message}
        resumeHideDuration={+resumeHideDuration}
        open={open}
        onClose={handleClose}
        action={
          closingIcon ? <MuiIconButton {...closingIcon[0]} onClick={handleClose} /> : null
        }
      />
    </>
  );
};

export default MuiButtonSnackbar;

MuiButtonSnackbar.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: node
   * The message to be displayed.
   */
  message: PropTypes.string,
  /**
   * mui prop: {horizontal: 'center' | 'left' | 'right',
   *            vertical: 'bottom' | 'top' }
   * The anchor of the Snackbar.
   */
  anchorOrigin: PropTypes.node,
  /**
   * mui prop: number
   * The number of milliseconds to wait before automatically calling the onClose function.
   * onClose should then set the state of the open prop to hide the Snackbar.
   * This behavior is disabled by default with the null value.
   */
  autoHideDuration: PropTypes.string,
  /**
   * mui prop: true | false
   * If true, the autoHideDuration timer will expire even if the window is not focused.
   */
  disableWindowBlurListener: PropTypes.bool,
  /**
   * mui prop: number
   * The number of milliseconds to wait before dismissing after user interaction.
   * If autoHideDuration prop isn't specified, it does nothing.
   * If autoHideDuration prop is specified but resumeHideDuration isn't,
   * we default to autoHideDuration / 2 ms.
   */
  resumeHideDuration: PropTypes.string,
  /**
   * mui prop: number | { appear?: number, enter?: number, exit?: number }
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  // transitionDuration: PropTypes.node,
  /**
   * components:
   * MuiButton
   */
  button: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * components:
   * MuiIconButton
   */
  closingIcon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiButtonSnackbar.defaultProps = {
  rootClass: [],
  message: '',
  anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
  autoHideDuration: '6000',
  disableWindowBlurListener: false,
  resumeHideDuration: '0',
};
