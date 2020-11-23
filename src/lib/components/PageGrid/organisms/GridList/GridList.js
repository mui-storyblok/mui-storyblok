/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  GridList as MuiGridList,
  GridListTile as MuiGridListTile,
} from '@material-ui/core';

import StoryBlok from 'lib/utils/Storyblok';
import {
  validComponents,
  muiDimensionProp,
} from 'lib/utils/customProps';
import GridListTileBar from './components/GridListTileBar/GridListTileBar';

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

const GridList = ({
  cellHeight,
  content,
  cols,
  spacing,
  rootClass,
  width,
  height,
  dataBlokC,
  dataBlokUid,
  storyblokClass,
}) => {
  const classes = useStyles();
  const styles = StoryBlok.arrayToMuiStyles(rootClass, { width: +width, height: +height });

  return (
    <div className={classes.root}>
      <MuiGridList
        cols={+cols}
        cellHeight={+cellHeight}
        spacing={+spacing}
        className={`${styles.root} ${storyblokClass}`}
        data-blok-c={dataBlokC}
        data-blok-uid={dataBlokUid}
      >
        {content.map(tile => (
          <MuiGridListTile
            key={tile.image}
            cols={+tile.cols}
            rows={+tile.rows}
            className={tile.storyblokClass}
            data-blok-c={tile.dataBlokC}
            data-blok-uid={tile.dataBlokUid}
          >
            <img src={tile.image} alt={tile.title} />
            {tile.gridListTileBar.length !== 0 ? (<GridListTileBar {...tile.gridListTileBar[0]} />) : null}
          </MuiGridListTile>
        ))}
      </MuiGridList>
    </div>
  );
};

export default GridList;

GridList.propTypes = {
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
  height(props, propName, componentName) {
    return muiDimensionProp(props, propName, componentName);
  },
  /**
   * mui prop: number
   * Number of px for the spacing between tiles.
   */
  width(props, propName, componentName) {
    return muiDimensionProp(props, propName, componentName);
  },
  /**
   * Content passed to render
   * components: MuiTitleData
   */
  content(props, propName, componentName) {
    const components = ['MuiTitleData'];
    return validComponents(props, propName, componentName, components);
  },
};

GridList.defaultProps = {
  rootClass: [],
  cellHeight: 180,
  cols: 2,
  spacing: 4,
  height: 500,
  width: 450,
  content: [],
};
