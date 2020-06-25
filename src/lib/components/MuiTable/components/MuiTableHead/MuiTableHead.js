import React from 'react';
import PropTypes from 'prop-types';
import { TableHead } from '@material-ui/core';
import MuiTableRow from '../MuiTableRow/MuiTableRow';
import StoryBlok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';

const MuiTableHead = ({
  rootClass,
  content,
}) => {
  const styles = StoryBlok.arrayToMuiStyles(rootClass);

  return (
    <TableHead className={styles.root}>
      {content.map((item, index) => <MuiTableRow {...item} key={index} />)}
    </TableHead>
  );
};

export default MuiTableHead;

MuiTableHead.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),

  /**
   * Content passed to render
   * components:
    MuiTableRow,
   */
  content(props, propName, componentName) {
    const components = ['MuiTableRow'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiTableHead.defaultProps = {
  rootClass: [],
  content: [],
};
