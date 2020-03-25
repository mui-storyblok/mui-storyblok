import React, {
  createElement, lazy, Suspense, useEffect,
} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const MuiGrid = lazy(() => import('../../../../../MuiGrid/MuiGrid'));
const MuiIcon = lazy(() => import('../../../../../MuiIcon/MuiIcon'));

let tabPannal = null;
const el = document.createElement('div');

export const handleCleanup = (
  value,
  index,
  element = el,
) => {
  if (tabPannal.children.length && element && value !== index) {
    tabPannal.removeChild(element);
  }
};

export const handlePropChange = (
  element = el,
) => {
  tabPannal.appendChild(element);
};

const TabPannal = ({
  content,
  value,
  index,
}) => {
  const components = {
    MuiGrid,
    MuiIcon,
  };
  useEffect(() => {
    tabPannal = document.getElementById('TabPannal');
    if (value === index) {
      handlePropChange();
    }

    return function cleanup() {
      if (value === index) {
        handleCleanup(value, index);
      }
    };
  }, [value]);

  if (value !== index) return null;
  return ReactDOM.createPortal(
    <Suspense fallback={<div />}>
      {content.map((item, i) => createElement(
        components[item.component],
        Object.assign(item, { key: i }),
      ))}
    </Suspense>,
    el,
  );
};

export default TabPannal;

TabPannal.propTypes = {
  /** MuiGrid */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,

  /** passed down form parent TabPannal */
  value: PropTypes.number.isRequired,
  /** passed down form parent TabPannal */
  index: PropTypes.number.isRequired,
};

TabPannal.defaultProps = {
  rootClass: [],
  disableFocusRipple: false,
  disableRipple: false,
  wrapped: false,
};
