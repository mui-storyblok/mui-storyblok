import React from 'react';
import PropTypes from 'prop-types';
import { GridListTileBar } from '@material-ui/core';
import Storyblok from '../../../../utils/Storyblok';
import MuiIconButtonRedirect from '../../../MuiIconButtonRedirect/MuiIconButtonRedirect';

console.log(Storyblok);

const MuiGridListTileBar = ({
  actionIcon,
  titlePosition,
  rootClass,
  subtitle,
  title,
}) => {
  const styles = Storyblok.arrayToMuiStyles(rootClass);

  return (
    <>
      <GridListTileBar
        title={title}
        subtitle={<span>{subtitle}</span>}
        actionIcon={
          actionIcon.map(icon => (
            <MuiIconButtonRedirect {...icon} />
          ))
        }
        titlePosition={titlePosition}
        className={styles.root}
      />
    </>
  );
};

export default MuiGridListTileBar;

MuiGridListTileBar.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: node
   * String or element serving as subtitle (support text).
   */
  subtitle: PropTypes.string,
  /**
   * mui prop: node
   * Title to be displayed on tile.
   */
  title: PropTypes.string,
  /**
   * mui prop: 'bottom' | 'top'
   * Position of the title bar.
   */
  titlePosition: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiIconButtonRedirect
   */
  actionIcon: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiGridListTileBar.defaultProps = {
  rootClass: [],
  title: '',
  titlePosition: 'bottom',
  subtitle: '',
};
