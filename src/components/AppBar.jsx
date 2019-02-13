import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as AppIcon } from './appIcon.svg';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  appToolbar: {
    'background-color': '#18453B',
    'color': 'white'
  }
});

function TothAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.appToolbar}>
          <AppIcon></AppIcon>
            <Typography className={classes.title} variant="title" color="inherit">
              Tasting of the Hops
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TothAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TothAppBar);