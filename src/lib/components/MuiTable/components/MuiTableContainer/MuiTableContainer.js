import React from 'react';
import PropTypes from 'prop-types';
import { TableContainer } from '@material-ui/core';
import StoryBlok from '../../../../utils/Storyblok';


const MuiTableContainer = ({ rootClass, table }) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableContainer className={styles.root}>
      {table}
    </TableContainer>
  );
};

export default MuiTableContainer;

MuiTableContainer.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * Content passed to render
   * components:
    MuiTable,
   */
  table: PropTypes.arrayOf(PropTypes.string),
};

MuiTableContainer.defaultProps = {
  table: '1',
  rootClass: [],
};
