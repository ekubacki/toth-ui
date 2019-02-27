import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import { ReactComponent as AppIcon } from "./appIcon.svg";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

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
  }
});

class TothAppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    }
    this.logOut = this.logOut.bind(this);
  }
  

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  //This is a quick and dirty reset button :)
  //TODO: How do we get back to the signup page from here?
  logOut() {
    this.props.logout();
  }

  render() {
    const { classes, user } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.appToolbar}>
            <AppIcon />
            <Typography
              className={classes.title}
              variant="title"
              color="inherit"
            >
              Tasting of the Hops
            </Typography>
            {user && (
              <div>
                <IconButton
                  aria-owns={open ? "menu-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.logOut.bind(this)}>Logout</MenuItem>
                </Menu>
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
