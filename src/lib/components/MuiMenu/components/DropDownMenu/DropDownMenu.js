import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import ArrowDropUp from '@material-ui/icons/ArrowDropUp';
import styles from './DropDownMenu.module.scss';

const DropDownMenu = ({
  children,
  btnTxt,
  color,
  variant,
  size,
  rootClass,
}) => (
  <div className={styles.dropdown} >
    <Button
      className={rootClass}
      color={color}
      variant={variant}
      size={size}
      endIcon={window.innerWidth > 959 ? (<ArrowDropDown />) : (<ArrowDropUp />)}
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
  /** mui prop: 'default'| 'inherit'| 'primary'| 'secondary' */
  color: PropTypes.string,
  /** mui prop: 'text' |'outlined'| 'contained */
  variant: PropTypes.string,
  /** mui prop: 'small'| 'medium'| 'large' */
  size: PropTypes.string,

  rootClass: PropTypes.string,

  children: PropTypes.node.isRequired,
};

DropDownMenu.defaultProps = {
  rootClass: '',
  variant: 'text',
  btnTxt: '',
  color: 'secondary',
  size: 'medium',
};
