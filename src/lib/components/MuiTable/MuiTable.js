import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';

import MuiTableHead from './components/MuiTableHead/MuiTableHead';
import MuiTableBody from './components/MuiTableBody/MuiTableBody';

const MuiTable = ({
  rootClass,
  padding,
  size,
  stickyHeader,
  tHead,
  tBody,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <Table
      className={styles.root}
      padding={padding}
      size={size}
      stickyHeader={stickyHeader}
    >
      <MuiTableHead {...tHead[0]} />
      <MuiTableBody {...tBody[0]} />
    </Table>
  );
};

export default MuiTable;

MuiTable.propTypes = {
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

  /**  MuiTableHead limit of 1 */
  tHead: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.string.isRequired,
    }),
  ).isRequired,
  /**  MuiTableBody limit of 1 */
  tBody: PropTypes.arrayOf(
    PropTypes.shape({
      component: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

MuiTable.defaultProps = {
  padding: 'default',
  size: 'medium',
  stickyHeader: false,
  rootClass: [],
};
