import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Table } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';

import MuiPaginationTableHead from './components/MuiPaginationTableHead/MuiPaginationTableHead';
import MuiPaginationTableBody from './components/MuiPaginationTableBody/MuiPaginationTableBody';
import MuiPaginationTableFooter from './components/MuiPaginationTableFooter/MuiPaginationTableFooter';

const MuiPaginationTable = ({
  rootClass,
  padding,
  size,
  stickyHeader,
  tHead,
  tBody,
  labelRowsPerPage,
  rowsPerPageOptions,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  const [numRows, setNumRows] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleRowNums = (totalRows) => {
    setNumRows(totalRows);
  };

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRows = (e) => {
    const { value } = e.target;
    setRowsPerPage(parseInt(value, 10));
    setPage(0);
  };

  return (
    <Table
      className={styles.root}
      padding={padding}
      size={size}
      stickyHeader={stickyHeader}
    >
      <MuiPaginationTableHead {...tHead[0]} />
      <MuiPaginationTableBody
        {...tBody[0]}
        handleRowNums={handleRowNums}
        numRows={numRows}
        rowsPerPage={rowsPerPage}
        page={page}
      />
      <MuiPaginationTableFooter
        labelRowsPerPage={labelRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        numRows={numRows}
        page={page}
        handleChangeRows={handleChangeRows}
        rowsPerPage={rowsPerPage}
        handlePageChange={handlePageChange}
      />
    </Table>
  );
};

export default MuiPaginationTable;

MuiPaginationTable.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui props: 'default' | 'checkbox' | 'none'
   * Allows TableCells to inherit padding of the Table.
   */
  padding: PropTypes.string,
  /**
   * mui props: 'small' | 'medium'
   * Allows TableCells to inherit size of the Table.
   */
  size: PropTypes.string,
  /**
   * mui props: true | false
   * set the header sticky. (It doesn't work with IE 11)
   */
  stickyHeader: PropTypes.bool,

  /**  MuiPaginationTableHead limit of 1 */
  tHead: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**  MuiPaginationTableBody limit of 1 */
  tBody: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
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
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

MuiPaginationTable.defaultProps = {
  padding: 'default',
  size: 'medium',
  stickyHeader: false,
  rootClass: [],
  labelRowsPerPage: 'Rows per page:',
  rowsPerPageOptions: [10, 25, 50, 100],
};
