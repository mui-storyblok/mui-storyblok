import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

import MuiGrid from '../../../MuiGrid/MuiGrid';
import MuiHeroHeader from '../../../MuiHeroHeader/MuiHeroHeader';
import MuiAppBar from '../../../MuiAppBar/MuiAppBar';

export const Blok = ({
  content,
  only,
}) => {
  const components = {
    MuiGrid,
    MuiHeroHeader,
    MuiAppBar,
  };

  return (
    <Hidden only={only}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))
    }
    </Hidden>
  );
};

export default Blok;

Blok.propTypes = {
  /**
   * mui prop array of: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
   * Hide the given breakpoint(s).
   * */
  only: PropTypes.arrayOf(PropTypes.string),

  /**
   * MuiGrid,
  *  MuiHeroHeader,
  *  MuiAppBar,
  */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

Blok.defaultProps = {
  only: [],
};
