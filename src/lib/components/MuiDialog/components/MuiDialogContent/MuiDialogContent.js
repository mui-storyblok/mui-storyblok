import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import Storyblok from '../../../../utils/Storyblok';

const MuiTypography = lazy(() => import('../../../MuiTypography/MuiTypography'));
const MuiExpansionPanel = lazy(() => import('../../../MuiExpansionPanel/MuiExpansionPanel'));

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
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </DialogContent>
  );
};

export default MuiDialogContent;

MuiDialogContent.propTypes = {
  /** mui prop: true | false */
  dividers: PropTypes.bool,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiDialogContent.defaultProps = {
  dividers: false,
  rootClass: [],
};
