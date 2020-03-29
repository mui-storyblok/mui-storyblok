import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';

import MuiGrid from 'lib/components/MuiGrid/MuiGrid';
import MuiHeroHeader from 'lib/components/MuiHeroHeader/MuiHeroHeader';
import MuiAppBar from 'lib/components/MuiAppBar/MuiAppBar';

export const Block = ({
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

export default Block;

Block.propTypes = {
  /* mui prop array of: 'xs' | 'sm' | 'md' | 'lg' | 'xl'   */
  only: PropTypes.arrayOf(PropTypes.string),

  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

Block.defaultProps = {
  only: [],
};
