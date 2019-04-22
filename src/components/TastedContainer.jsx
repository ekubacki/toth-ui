import * as React from "react";
import DoneIcon from '@material-ui/icons/Done';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import { tasteBeer } from '../utils/api'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  done: {
    color: "#2EF720"
  }
});

class TastedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackbarOpen: false
    }
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarOpen: false });
  }

  onTasteBeer() {
    const { tasting } = this.props;
    tasteBeer(tasting.beerName, tasting.brewery)
      .then(() => {
        this.setState({ snackbarOpen: true })
      })
      .catch(error => {
        // toast failure
      });
  }

  render() {
    const { classes } = this.props;
    const beerTastedButton = this.props.user.isAdmin ?
      <Button
        color="primary"
        variant="contained"
        onClick={this.onTasteBeer.bind(this)}
      >
        Beer Tasted
      </Button>
      : <></>

    return (
      <>
        {beerTastedButton}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Beer Tasted!</span>}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleSnackbarClose}
            >
              <DoneIcon className={classes.done} />
            </IconButton>,
          ]}
        />
      </>
    );
  }
}

export default withStyles(styles)(TastedContainer)