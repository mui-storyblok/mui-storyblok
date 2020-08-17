import React from 'react';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import { validComponents } from '../../../../utils/customProps';
import Storyblok from '../../../../utils/Storyblok';
import MuiTypography from '../../../MuiTypography/MuiTypography';
import MuiAccordion from '../../../MuiAccordion/MuiAccordion';
import MuiList from '../../../MuiList/MuiList';
import { renderComponents } from '../../../../utils/customComponents';

const MuiCardContent = ({
  content,
  rootClass,
}) => {
  const components = {
    MuiTypography,
    MuiAccordion,
    MuiList,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <CardContent
      className={styles.root}
    >
      {content.map((component, key) => renderComponents(components, component, key))}
    </CardContent>
  );
};

export default MuiCardContent;

MuiCardContent.propTypes = {
  /**
   * stroyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * Content passed to render
   * components:
    MuiTypography,
    MuiAccordion,
    MuiList,
   */
  content(props, propName, componentName) {
    const components = [
      'MuiTypography',
      'MuiAccordion',
      'MuiList',
    ];
    return validComponents(props, propName, componentName, components);
  },
};

MuiCardContent.defaultProps = {
  rootClass: [],
  content: [],
};
