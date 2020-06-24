import React from 'react';
import { TableBody } from '@material-ui/core';
import PropTypes from 'prop-types';
import Storyblok from '../../../../utils/Storyblok';
import { validComponents } from '../../../../utils/customProps';
import MuiTableRow from '../MuiTableRow/MuiTableRow';

const MuiTableBody = ({ rootClass, content }) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <TableBody className={styles.root}>
      {content.map((item, index) => <MuiTableRow {...item} key={index} />)}
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
  content(props, propName, componentName) {
    const components = ['MuiTableRow'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiTableBody.defaultProps = {
  rootClass: [],
  content: [],
};
