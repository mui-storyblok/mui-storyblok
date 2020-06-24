import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import Storyblok from '../../utils/Storyblok';
import { validComponents, validComponentsRequired } from '../../utils/customProps';
import MuiDialogActions from './components/MuiDialogActions/MuiDialogActions';
import MuiDialogTitle from './components/MuiDialogTitle/MuiDialogTitle';
import MuiDialogContent from './components/MuiDialogContent/MuiDialogContent';

const MuiDialog = ({
  open,
  toggleDialog,
  rootClass,
  dialogTitle,
  content,
}) => {
  const components = {
    MuiDialogActions,
    MuiDialogTitle,
    MuiDialogContent,
  };
  const dialogStyles = Storyblok.arrayToMuiStyles(rootClass);
  const title = dialogTitle[0];
  return (
    <Dialog
      className={dialogStyles.root}
      open={open}
    >
      <MuiDialogTitle {...title} toggleDialog={toggleDialog} />
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </Dialog>
  );
};

export default MuiDialog;

MuiDialog.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** 'MuiDialogContent', 'MuiDialogActions' */
  content(props, propName, componentName) {
    const components = ['MuiDialogContent', 'MuiDialogActions'];
    return validComponents(props, propName, componentName, components);
  },
  /** MuiDialogTitle Allowed maximum: 1 */
  dialogTitle(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiDialogTitle'], 1);
  },
  /** passed down from parent componet to hide or show Dialog */
  open: PropTypes.bool,
  /** passed down from parent componet to hide or show Dialog */
  toggleDialog: PropTypes.func.isRequired,
};

MuiDialog.defaultProps = {
  open: false,
  rootClass: [],
  dialogTitle: [],
  content: [],
};
