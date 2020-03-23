import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../../../utils/Storyblok';
import CardContent from '@material-ui/core/CardContent';

const MuiTypography = lazy(() => import('../../../MuiTypography/MuiTypography'));
const MuiExpansionPanel = lazy(() => import('../../../MuiExpansionPanel/MuiExpansionPanel'));
// const MuiList = lazy(() => import('../../../MuiList/MuiList'));

const MuiCardContent = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiTypography,
    MuiExpansionPanel,
    // MuiList,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardContent
      className={styles.root}
    >
      <Suspense fallback={<div />}>
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </Suspense>
    </CardContent>
  );
};

export default MuiCardContent;

MuiCardContent.propTypes = {
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiCardContent.defaultProps = {
  rootClass: [],
};
