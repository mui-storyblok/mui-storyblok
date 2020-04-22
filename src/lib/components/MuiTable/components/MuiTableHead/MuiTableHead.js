import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { TableHead } from '@material-ui/core';
import MuiTableRow from '../MuiTableRow/MuiTableRow';
import StoryBlok from '../../../../utils/Storyblok';

const MuiTableHead = ({
  rootClass,
  content,
}) => {
  const components = {
    MuiTableRow,
  };

  const styles = StoryBlok.arrayToMuiStyles(rootClass);
  return (
    <TableHead className={styles.root}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
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
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiTableHead.defaultProps = {
  rootClass: [],
};
