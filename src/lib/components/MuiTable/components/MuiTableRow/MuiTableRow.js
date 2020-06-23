import React from 'react';
import PropTypes from 'prop-types';
import { TableRow } from '@material-ui/core';
import MuiTableCell from './components/MuiTableCell/MuiTableCell';
import StoryBlok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';

const MuiTableRow = ({
  rootClass,
  content,
  hover,
  selected,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableRow
      className={styles.root}
      hover={hover}
      selected={selected}
    >
      {content.map((item, index) => <MuiTableCell {...item} key={index} />)}
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
  content(props, propName, componentName) {
    const components = ['MuiTableCell'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiTableRow.defaultProps = {
  hover: false,
  selected: false,
  rootClass: [],
  content: [],
};
