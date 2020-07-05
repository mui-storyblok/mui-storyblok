import React from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import Storyblok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';
import BlokForm from '../../../BlokForm/BlokForm';
import MuiDialogContentTypography from './components/MuiDialogContentTypography/MuiDialogContentTypography';
import MuiExpansionPanel from '../../../MuiExpansionPanel/MuiExpansionPanel';
import { renderComponents } from '../../../../utils/customComponents';

const MuiDialogContent = ({
  dividers,
  content,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const components = {
    MuiDialogContentTypography,
    MuiExpansionPanel,
    BlokForm,
  };

  return (
    <DialogContent
      className={styles.root}
      dividers={dividers}
    >
      {content.map((component, key) => renderComponents(components, component, key))}
    </DialogContent>
  );
};

export default MuiDialogContent;

MuiDialogContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Override or extend the styles applied to the component.
   * */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * Display the top and bottom dividers.
   * */
  dividers: PropTypes.bool,
  /** 'MuiTypography', 'MuiExpansionPanel', 'BlokForm' */
  content(props, propName, componentName) {
    const components = ['MuiTypography', 'MuiExpansionPanel', 'BlokForm'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiDialogContent.defaultProps = {
  dividers: false,
  rootClass: [],
  content: [],
};
