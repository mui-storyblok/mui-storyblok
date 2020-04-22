/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@material-ui/core';

import StoryBlok from '../../../../../../utils/Storyblok';
import MuiTypography from '../../../../../MuiTypography/MuiTypography';

const MuiPaginationTableCell = ({
  content,
  rootClass,
  align,
  padding,
  size,
  sortDirection,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableCell
      className={styles.root}
      align={align}
      padding={padding}
      size={size}
      sortDirection={sortDirection}
    >
      <MuiTypography {...content[0]} />
    </TableCell>
  );
};

export default MuiPaginationTableCell;

MuiPaginationTableCell.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'center' | 'inherit' | 'justify' | 'left' | 'right'
   * Set the text-align on the table cell content
   */
  align: PropTypes.string,
  /**
   * mui prop: 'checkbox' | 'default' | 'none'
   * Sets the padding applied to the cell.
   */
  padding: PropTypes.string,
  /**
   * mui prop: 'small' | 'medium'
   * Specify the size of the cell
   */
  size: PropTypes.string,
  /**
   * mui prop: 'asc' | 'desc' | false
   * Set aria-sort direction.
   */
  sortDirection: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiTypography,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiPaginationTableCell.defaultProps = {
  align: 'inherit',
  padding: 'default',
  size: 'medium',
  sortDirection: false,
  rootClass: [],
};
