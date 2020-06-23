/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '@material-ui/core';
import StoryBlok from '../../../../../../utils/Storyblok';
import {
  validComponentsRequired,
  muiStringProp,
} from '../../../../../../utils/customProps';

import MuiTypography from '../../../../../MuiTypography/MuiTypography';

const MuiTableCell = ({
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

export default MuiTableCell;

MuiTableCell.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: 'center', 'inherit', 'justify', 'left', 'right'
   * Set the text-align on the table cell content
   */
  align(props, propName, componentName) {
    const validProps = ['center', 'inherit', 'justify', 'left', 'right'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'checkbox', 'default', 'none'
   * Sets the padding applied to the cell.
   */
  padding(props, propName, componentName) {
    const validProps = ['checkbox', 'default', 'none'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'small', 'medium'
   * Specify the size of the cell
   */
  size(props, propName, componentName) {
    const validProps = ['small', 'medium'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'asc', 'desc', false
   * Set aria-sort direction.
   */
  sortDirection(props, propName, componentName) {
    const validProps = ['asc', 'desc', 'false'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * Content passed to render
   * components: MuiTypography,
   */
  content(props, propName, componentName) {
    return validComponentsRequired(props, propName, componentName, ['MuiTypography'], 1);
  },
};

MuiTableCell.defaultProps = {
  align: 'inherit',
  padding: 'default',
  size: 'medium',
  sortDirection: false,
  rootClass: [],
  content: [],
};
