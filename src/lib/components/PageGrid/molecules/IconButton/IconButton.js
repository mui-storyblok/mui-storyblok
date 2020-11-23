import React, { lazy, Suspense } from 'react';
import { validComponents } from 'lib/utils/customProps';
import { IconButton as MuiIconButton } from './components/IconButton/IconButton';

const Tooltip = lazy(() => import('lib/components/PageGrid/atoms/Tooltip/Tooltip'));

/**
* IconButton for more docs check out https://material-ui.com/api/icon-button/#iconbutton-api
*/

export const IconButton = (props) => {
  if (props.tooltip.length > 0) {
    return (
      <Suspense fallback={<></>}>
        <Tooltip {...props.tooltip[0]}>
          <MuiIconButton {...props} />
        </Tooltip>
      </Suspense>
    );
  }

  return <MuiIconButton {...props} />;
};

export default IconButton;

IconButton.propTypes = {
  /** Tooltip to wrap button in to display help text */
  tooltip(props, propName, componentName) {
    const components = ['Tooltip'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

IconButton.defaultProps = {
  tooltip: [],
};
