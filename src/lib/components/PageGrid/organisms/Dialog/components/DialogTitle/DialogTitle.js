import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle as MuiDialogTitle } from '@material-ui/core';
import Storyblok from 'lib/utils/Storyblok';

const DialogTitle = ({
  rootClass,
  text,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <MuiDialogTitle
      disableTypography
      className={`${styles.root} ${storyblokClass}`}
      data-blok-c={dataBlokC}
      data-blok-uid={dataBlokUid}
    >
      {text}
    </MuiDialogTitle>
  );
};

export default DialogTitle;

DialogTitle.propTypes = {
  text: PropTypes.string.isRequired,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokC: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  dataBlokUid: PropTypes.string,
  /** storyblok prop for when in editor to allow click bridge */
  storyblokClass: PropTypes.string,
};

DialogTitle.defaultProps = {
  rootClass: [],
  dataBlokC: '',
  dataBlokUid: '',
  storyblokClass: '',
};
