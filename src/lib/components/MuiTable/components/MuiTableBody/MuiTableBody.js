import React, { createElement } from 'react';
import { TableBody } from '@material-ui/core';
import PropTypes from 'prop-types';
import Storyblok from '../../../../utils/Storyblok';

import MuiTableRow from '../MuiTableRow/MuiTableRow';

const MuiTableBody = ({ rootClass, content }) => {
  const components = {
    MuiTableRow,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <TableBody className={styles.root}>
      {content.map((item, index) => createElement(
        components[item.component],
        Object.assign(item, { key: index }),
      ))}
    </TableBody>
  );
};

export default MuiTableBody;

MuiTableBody.propTypes = {
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

MuiTableBody.defaultProps = {
  rootClass: [],
};
