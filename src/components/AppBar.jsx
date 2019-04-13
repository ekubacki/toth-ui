import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import LineupIcon from "./icons/LineupIcon";
import TastingsIcon from "./icons/TastingsIcon";
import LogoutIcon from "./icons/LogoutIcon";
import AppIcon from "./icons/AppIcon";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    [theme.breakpoints.up("md")]: {
      display: "block"
    },
    flexGrow: 1
  },
  appToolbar: {
    "background-color": "#18453B",
    color: "white"
  },
  currentView: {
    paddingBottom: "2px", 
    borderStyle: "solid solid solid solid",
    borderWidth: "2px 2px 2px 2px",
    borderColor: "white"
  }
});

class TothAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    this.props.logout();
  }

  handleViewChange = (view) => {
     this.props.onViewChange(view)
  }

  getViewIconClass = (view) => {
    const { currentView, classes } = this.props;
    return currentView === view ? classes.currentView : null;
  }

  render() {
    const { classes, user } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.appToolbar}>
            <AppIcon width={44.446} height={44.446}/>
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
            >
              Tasting of the Hops
            </Typography>
            <IconButton onClick={() => {this.handleViewChange('TASTINGS')}}>
              <TastingsIcon className={this.getViewIconClass('TASTINGS')}/>
            </IconButton>
            <IconButton onClick={() => {this.handleViewChange('LINEUP')}}>
              <LineupIcon className={this.getViewIconClass('LINEUP')}/>
            </IconButton>
            {user && (
              <div>
                <IconButton onClick={this.logout}>
                  <LogoutIcon />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TothAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TothAppBar);
