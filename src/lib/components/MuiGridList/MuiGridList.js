/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile } from '@material-ui/core';
import StoryBlok from '../../utils/Storyblok';
import MuiGridListTileBar from './components/MuiGridListTileBar/MuiGridListTileBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const MuiGridList = ({
  cellHeight,
  content,
  cols,
  spacing,
  rootClass,
  width,
  height,
}) => {
  const classes = useStyles();
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { width: +width, height: +height });

  return (
    <div className={classes.root}>
      <GridList
        cols={+cols}
        cellHeight={+cellHeight}
        className={styles.root}
        spacing={+spacing}
      >
        {content.map(tile => (
          <GridListTile key={tile.image} cols={+tile.cols}>
            <img src={tile.image} alt={tile.title} />
            {tile.MuiGridListTileBar.length !== 0 ? (<MuiGridListTileBar {...tile.MuiGridListTileBar[0]} />) : null}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default MuiGridList;

MuiGridList.propTypes = {
  /**
   * storyblok multiselect of css classes
   * Mui Override or extend the styles applied to the component. See CSS API below for more details.
   */
  rootClass: PropTypes.arrayOf(PropTypes.string),
  /**
   * mui prop: number | 'auto'
   * Number of px for one cell height.
   * You can set 'auto' if you want to let the children determine the height.
   */
  cellHeight: PropTypes.string,
  /**
   * mui prop: number
   * Number of columns.
   */
  cols: PropTypes.string,
  /**
   * mui prop: number
   * Number of px for the spacing between tiles.
   */
  spacing: PropTypes.string,
  /**
   * mui prop: number
   * Number of px for the spacing between tiles.
   */
  height: PropTypes.string,
  /**
   * mui prop: number
   * Number of px for the spacing between tiles.
   */
  width: PropTypes.string,
  /**
   * Content passed to render
   * components: MuiTitleData
   */
  content: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
  /**
   * Content passed to render
   * components: MuiTitleData
   */
  gridListTileBar: PropTypes.arrayOf(PropTypes.shape({
    component: PropTypes.string.isRequired,
  })).isRequired,
};

MuiGridList.defaultProps = {
  rootClass: [],
  cellHeight: 180,
  cols: 2,
  spacing: 4,
  height: 500,
  width: 450,
};
