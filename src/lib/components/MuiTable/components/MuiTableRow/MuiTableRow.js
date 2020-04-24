import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { TableRow } from '@material-ui/core';
import MuiTableCell from './components/MuiTableCell/MuiTableCell';

import StoryBlok from '../../../../utils/Storyblok';

const MuiTableRow = ({
  rootClass,
  content,
  hover,
  selected,
}) => {
  const components = {
    MuiTableCell,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableRow
      className={styles.root}
      hover={hover}
      selected={selected}
    >
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </TableRow>
  );
};

export default MuiTableRow;

MuiTableRow.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: true | false
   * If true, the table row will shade on hover.
   */
  hover: PropTypes.bool,
  /**
   * mui prop: true | false
   * If true, the table row will have the selected shading.
   */
  selected: PropTypes.bool,
  /**
   * Content passed to render
   * components:
   * MuiTableCell
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTableRow.defaultProps = {
  hover: false,
  selected: false,
  rootClass: [],
};
