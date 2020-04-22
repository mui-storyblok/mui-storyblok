import React from 'react';
import PropTypes from 'prop-types';
import { TableFooter, TableRow } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';
import MuiTablePagination from './MuiTablePagination/MuiTablePagination';

const MuiPaginationTableFooter = ({
  rootClass,
  labelRowsPerPage,
  rowsPerPageOptions,
  numRows,
  page,
  handleChangeRows,
  rowsPerPage,
  handlePageChange,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableFooter className={styles.root}>
      <TableRow>
        <MuiTablePagination
          labelRowsPerPage={labelRowsPerPage}
          rowsPerPageOptions={rowsPerPageOptions}
          numRows={numRows}
          page={page}
          handleChangeRows={handleChangeRows}
          rowsPerPage={rowsPerPage}
          handlePageChange={handlePageChange}
        />
      </TableRow>
    </TableFooter>
  );
};

export default MuiPaginationTableFooter;

MuiPaginationTableFooter.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'Rows per page:'
   * Customize the rows per page label.
   */
  labelRowsPerPage: PropTypes.node,
  /**
   * mui prop: 0
   * displays page of table display.
   */
  page: PropTypes.number,
  /**
   * func
   * Set the number of rows in table.
   */
  // eslint-disable-next-line react/require-default-props
  handleChangeRows: PropTypes.func,
  /**
   * default number displayed: 10
   * The number of rows displayed on table per page.
   */
  rowsPerPage: PropTypes.number,
  /**
   * mui prop: [10, 25, 50, { label: 'All', value: -1 }]
   * Customizes the options of the rows per page select field.
   * If less than two options are available, no select field will be displayed.
   */
  rowsPerPageOptions: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /**
   * mui prop: 0
   * Number of rows in table.
   */
  numRows: PropTypes.number,
  /**
   * function
   * Changes the page of table
   */
  // eslint-disable-next-line react/require-default-props
  handlePageChange: PropTypes.func,
};

MuiPaginationTableFooter.defaultProps = {
  labelRowsPerPage: 'Rows per page:',
  numRows: 0,
  page: 0,
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 25, 50, 100],
  rootClass: [],
};
