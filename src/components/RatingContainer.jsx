import * as React from "react";
import DoneIcon from '@material-ui/icons/Done';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import { withStyles } from '@material-ui/core/styles';
import Rating from 'material-ui-rating';
import { rateBeer, findUserBeerRating } from '../utils/api'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  done: {
    color: "#2EF720"
  }
});

class RatingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: props.tasting.rating,
      rated: false,
      snackbarOpen: false
    }
  }

  componentWillMount() {
    findUserBeerRating(this.props.user.id, this.props.tasting.id)
      .then(rating => {
        this.setState({ rating: rating.rating, rated: true })
      })
      .catch(() => {
        this.setState({ rated: false })
      })
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ snackbarOpen: false });
  };

  handleRatingSelected(rating) {
    const { user, tasting } = this.props;
    rateBeer(user.firstName, user.lastName, tasting.beerName, tasting.brewery, rating)
      .then(() => {
        this.setState({ rating, rated: true, snackbarOpen: true })  
      })
      .catch(error => {
        // toast failure
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Rating
          readOnly={this.state.rated}
          value={this.state.rating}
          max={5}
          onChange={this.handleRatingSelected.bind(this)}
        />
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
            message={<span id="message-id">Thanks for voting!</span>}
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                className={classes.close}
                onClick={this.handleSnackbarClose}
              >
                <DoneIcon className={classes.done}/>
              </IconButton>,
            ]}
          />
        </>
    );
  }
}

export default withStyles(styles)(RatingContainer)