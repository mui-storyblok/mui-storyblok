import React, { createElement, useEffect } from 'react';
import { TableBody } from '@material-ui/core';
import PropTypes from 'prop-types';
import Storyblok from '../../../../utils/Storyblok';

import MuiPaginationTableRow from '../MuiPaginationTableRow/MuiPaginationTableRow';

const MuiPaginationTableBody = ({
  rootClass,
  content,
  handleRowNums,
  page,
  rowsPerPage,
}) => {
  const components = {
    MuiPaginationTableRow,
  };

  useEffect(() => {
    handleRowNums(content.length);
  }, []);

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <TableBody className={styles.root}>
      {content.slice(
        page * rowsPerPage,
        (page * rowsPerPage) + rowsPerPage,
      ).map((row, rowIndex) => createElement(
        components[row.component],
        Object.assign(row, { key: rowIndex }),
      ))
      }
    </TableBody>
  );
};

export default MuiPaginationTableBody;

MuiPaginationTableBody.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * function
   * Sets the number of rows in table.
   */
  // eslint-disable-next-line react/require-default-props
  handleRowNums: PropTypes.func,
  /**
   * default: 0
   * page number of table.
   */
  // eslint-disable-next-line react/require-default-props
  page: PropTypes.number,
  /**
   * default: 10
   * Sets the number of rows in table.
   */
  // eslint-disable-next-line react/require-default-props
  rowsPerPage: PropTypes.number,
  /**
   * Content passed to render
   * components:
    MuiPaginationTableRow,
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiPaginationTableBody.defaultProps = {
  rootClass: [],
};
