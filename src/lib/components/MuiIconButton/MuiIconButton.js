import React from 'react';
import MuiTooltip from '../MuiTooltip/MuiTooltip';
import IconButton from './components/IconButton/IconButton';
import { validComponents } from '../../utils/customProps';
/**
* MuiIconButton for more docs check out https://material-ui.com/api/icon-button/#iconbutton-api
*/

export const MuiIconButton = (props) => {
  if (props.tooltip.length > 0) {
    return (
      <MuiTooltip {...props.tooltip[0]}>
        <IconButton {...props} />
      </MuiTooltip>
    );
  }

  return <IconButton {...props} />;
};

export default MuiIconButton;

MuiIconButton.propTypes = {
  /** Tooltip to wrap button in to display help text */
  tooltip(props, propName, componentName) {
    const components = ['MuiTooltip'];
    return validComponents(props, propName, componentName, components, 1);
  },
};

MuiIconButton.defaultProps = {
  tooltip: [],
};
