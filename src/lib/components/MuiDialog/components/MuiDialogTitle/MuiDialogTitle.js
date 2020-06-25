import React from 'react';
import PropTypes from 'prop-types';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Storyblok from '../../../../utils/Storyblok';

const MuiDialogTitle = ({
  toggleDialog,
  rootClass,
  text,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <DialogTitle
      disableTypography
      className={styles.root}
    >
      {text}
      <IconButton aria-label="close" onClick={toggleDialog}>
        <CloseIcon />
      </IconButton>
    </DialogTitle>
  );
};

export default MuiDialogTitle;

MuiDialogTitle.propTypes = {
  text: PropTypes.string.isRequired,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** passed down from parent to close Dialog */
  toggleDialog: PropTypes.func.isRequired,
};

MuiDialogTitle.defaultProps = {
  rootClass: [],
};
