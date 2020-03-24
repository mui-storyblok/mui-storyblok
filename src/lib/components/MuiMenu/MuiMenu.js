import React, { createElement, lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import Storyblok from '../../utils/Storyblok';

const DropDownMenu = lazy(() => import('./components/DropDownMenu/DropDownMenu'));
const MuiMenuItem = lazy(() => import('./components/MuiMenuItem/MuiMenuItem'));

const MuiMenu = ({
  content,
  rootClass,
  size,
  color,
  btnText,
}) => {
  const components = {
    MuiMenuItem,
  };

  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <Suspense fallback={<div />}>
      <DropDownMenu
        rootClass={styles.root}
        btnTxt={btnText}
        size={size}
        color={color}
      >
        {content.map((item, index) => createElement(
          components[item.component],
          Object.assign(item, { key: index }),
        ))}
      </DropDownMenu>
    </Suspense>
  );
};

export default MuiMenu;

MuiMenu.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  btnText: PropTypes.string.isRequired,
  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiMenu.defaultProps = {
  rootClass: [],
  size: 'medium',
  color: 'default',
};
