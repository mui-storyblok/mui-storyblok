import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';

import Storyblok from 'lib/utils/Storyblok';
import MuiTypography from 'lib/components/MuiTypography/MuiTypography';
import MuiExpansionPanel from 'lib/components/MuiExpansionPanel/MuiExpansionPanel';

const MuiDialogContent = ({
  dividers,
  content,
  rootClass,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  const components = {
    MuiTypography,
    MuiExpansionPanel,
  };

  return (
    <DialogContent
      className={styles.root}
      dividers={dividers}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
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
  /** MuiTypography MuiExpansionPanel */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiDialogContent.defaultProps = {
  dividers: false,
  rootClass: [],
};
