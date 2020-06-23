import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Storyblok from '../../utils/Storyblok';
import { muiStringProp } from '../../utils/customProps';

const RefComp = React.forwardRef((props, ref) => <div {...props} ref={ref}>{props.children}</div>);

const MuiTooltip = ({
  rootClass,
  title,
  arrow,
  placement,
  children,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);
  return (
    <Tooltip
      data-testid="tooltip"
      className={styles.root}
      placement={placement}
      title={title}
      arrow={arrow}
    >
      <RefComp>
        {children}
      </RefComp>
    </Tooltip>
  );
};

export default MuiTooltip;

MuiTooltip.propTypes = {

  children: PropTypes.node.isRequired,

  /** stroyblok multiselect of css classes */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /** text for tooltip */
  title: PropTypes.string.isRequired,
  /**
   * mui prop: true | false
   * If true, adds an arrow to the tooltip.
   * */
  arrow: PropTypes.bool,
  /**
   * mui prop:
   'bottom-end' , 'bottom-start' , 'bottom' , 'left-end' , 'left-start'
   , 'left' , 'right-end' , 'right-start' , 'right' , 'top-end' , 'top-start' , 'top'
   * Tooltip placement.
   * */
  placement(props, propName, componentName) {
    const validProps = [
      'bottom-end', 'bottom-start', 'bottom', 'left-end',
      'left-start', 'left', 'right-end', 'right-start',
      'right', 'top-end', 'top-start', 'top',
    ];
    return muiStringProp(props, propName, componentName, validProps);
  },

};

MuiTooltip.defaultProps = {
  arrow: false,
  placement: 'bottom',
  rootClass: [],
};
