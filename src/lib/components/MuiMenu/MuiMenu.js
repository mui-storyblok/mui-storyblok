import React from 'react';
import PropTypes from 'prop-types';
import {
  validComponents,
  muiStringProp,
} from '../../utils/customProps';
import { renderComponents } from '../../utils/customComponents';
import Storyblok from '../../utils/Storyblok';
import DropDownMenu from './components/DropDownMenu/DropDownMenu';
import MuiMenuItem from './components/MuiMenuItem/MuiMenuItem';

const MuiMenu = ({
  content,
  rootClass,
  size,
  color,
  btnText,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <DropDownMenu
      rootClass={styles.root}
      btnTxt={btnText}
      size={size}
      color={color}
    >
      {content.map((component, key) => renderComponents({ MuiMenuItem }, component, key))}
    </DropDownMenu>
  );
};

export default MuiMenu;

MuiMenu.propTypes = {
  /**
   * mui prop: 'small', 'medium', 'large'
   */
  size(props, propName, componentName) {
    const validProps = ['small', 'medium', 'large'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /**
   * mui prop: 'default', 'inherit', 'primary', 'secondary'
   */
  color(props, propName, componentName) {
    const validProps = ['default', 'inherit', 'primary', 'secondary'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** text for the btn */
  btnText: PropTypes.string.isRequired,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** MuiMenuItem */
  content(props, propName, componentName) {
    const components = ['MuiMenuItem'];
    return validComponents(props, propName, componentName, components);
  },
};

MuiMenu.defaultProps = {
  rootClass: [],
  size: 'medium',
  color: 'default',
  content: [],
};
