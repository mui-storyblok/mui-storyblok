import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import styles from './DropDownMenu.module.scss';
import {
  muiStringProp,
} from '../../../../utils/customProps';

const DropDownMenu = ({
  children,
  btnTxt,
  color,
  variant,
  size,
  rootClass,
}) => (
  <div className={styles.dropdown}>
    <Button
      className={rootClass}
      color={color}
      variant={variant}
      size={size}
      endIcon={<ArrowDropDown />}
    >
      {btnTxt}
    </Button>
    <Paper
      variant="outlined"
      className={styles.dropdownContent}
    >
      {children}
    </Paper>
  </div>
);

export default DropDownMenu;

DropDownMenu.propTypes = {
  /** button text for dropdown click */
  btnTxt: PropTypes.string,
  /** mui prop: 'default', 'inherit', 'primary', 'secondary' */
  color(props, propName, componentName) {
    const validProps = ['default', 'inherit', 'primary', 'secondary'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** mui prop: 'text' ,'outlined', 'contained' */
  variant(props, propName, componentName) {
    const validProps = ['text' ,'outlined', 'contained'];
    return muiStringProp(props, propName, componentName, validProps);
  },
  /** mui prop: 'small', 'medium', 'large' */
  size(props, propName, componentName) {
    const validProps = ['small', 'medium', 'large'];
    return muiStringProp(props, propName, componentName, validProps);
  },

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.node.isRequired,
};

DropDownMenu.defaultProps = {
  rootClass: '',
  variant: 'text',
  btnTxt: '',
  color: 'secondary',
  size: 'medium',
};
