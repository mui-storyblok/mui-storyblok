import React from 'react';
import { TablePagination } from '@material-ui/core';
import PropTypes from 'prop-types';
import MuiActionsComponent from './components/MuiActionsComponent/MuiActionsComponent';
import StoryBlok from '../../../../../utils/Storyblok';

const MuiTablePagination = ({
  labelDisplayedRows,
  labelRowsPerPage,
  rowsPerPageOptions,
  rootClass,
  numRows,
  handleChangeRows,
  page,
  rowsPerPage,
  handlePageChange,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TablePagination
      className={styles.root}
      count={numRows}
      labelDisplayedRows={labelDisplayedRows}
      labelRowsPerPage={labelRowsPerPage}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={rowsPerPageOptions}
      onChangePage={handlePageChange}
      onChangeRowsPerPage={handleChangeRows}
      ActionsComponent={MuiActionsComponent}
    />
  );
};

export default MuiTablePagination;

MuiTablePagination.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: function
   * Customize the displayed rows label. Invoked with a { from, to, count, page } object.
   */
  // eslint-disable-next-line react/require-default-props
  labelDisplayedRows: PropTypes.func,
  /**
   * mui prop: 'Rows per page:'
   * Customize the rows per page label.
   */
  labelRowsPerPage: PropTypes.node,
  /**
   * mui prop: [10, 25, 50, 100]
   * Customizes the options of the rows per page select field.
   * If less than two options are available, no select field will be displayed.
   */
  rowsPerPageOptions: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  /**
   * mui prop: 0
   * Number of rows on the table.
   */
  numRows: PropTypes.number,
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
   * function
   * Changes the page of table
   */
  // eslint-disable-next-line react/require-default-props
  handlePageChange: PropTypes.func,
};

MuiTablePagination.defaultProps = {
  labelRowsPerPage: 'Rows per page:',
  numRows: 0,
  page: 0,
  rowsPerPage: 10,
  rowsPerPageOptions: [10, 25, 50, 100],
  rootClass: [],
};
