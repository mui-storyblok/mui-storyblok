import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import MuiGrid from '../../../MuiGrid/MuiGrid';

const components = {
  MuiGrid,
};

export const Block = ({
  content,
  only,
}) => (
  <Hidden only={only}>
    {content.map((item, index) => React.createElement(
      components[item.component],
      Object.assign(item, { key: index }),
    ))
    }
  </Hidden>
);

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
