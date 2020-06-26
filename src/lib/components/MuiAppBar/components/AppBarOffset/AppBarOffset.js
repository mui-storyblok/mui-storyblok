import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  offset: {
    ...theme.mixins.toolbar,
    flexGrow: 1,
  },
}));

export const AppBarOffset = () => {
  const classes = useStyles();
  return <div className={classes.offset} />;
};

export default AppBarOffset;
