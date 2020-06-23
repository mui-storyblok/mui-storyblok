import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import {
  muiStringProp,
  validComponentsRequired,
} from '../../utils/customProps';

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
   * mui props: 'default', 'checkbox', 'none'
   * Allows TableCells to inherit padding of the Table.
   */
  padding(props, propName, componentName) {
    const validProps = ['default', 'checkbox', 'none'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui props: 'small', 'medium'
   * Allows TableCells to inherit size of the Table.
   */
  size(props, propName, componentName) {
    const validProps = ['small', 'medium'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui props: true | false
   * set the header sticky. (It doesn't work with IE 11)
   */
  stickyHeader: PropTypes.bool,

  /**  MuiTableHead limit of 1 */
  tHead(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiTableHead'], 1);
  },
  /**  MuiTableBody limit of 1 */
  tBody(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiTableBody'], 1);
  },
};

MuiTable.defaultProps = {
  padding: 'default',
  size: 'medium',
  stickyHeader: false,
  rootClass: [],
  tHead: [],
  tBody: [],
};
