import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

export const styles = theme => (
  {
    offset: {
      ...theme.mixins.toolbar,
      flexGrow: 1,
    },
  });

export const AppBarOffset = ({ classes }) => (
  <div className={classes.offset} />
);

export default withStyles(styles)(AppBarOffset);

AppBarOffset.propTypes = {
  classes: PropTypes.shape({
    offset: PropTypes.string,
  }).isRequired,
};

AppBarOffset.defaultProps = {};
