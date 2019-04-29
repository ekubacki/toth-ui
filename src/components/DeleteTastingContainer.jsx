import * as React from "react"
import DoneIcon from '@material-ui/icons/Done'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/core/styles'
import { deleteTasting } from '../utils/api'

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2,
  },
  done: {
    color: "#2EF720"
  }
})

class DeleteTastingContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      snackbarOpen: false
    }
  }

  handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ snackbarOpen: false })
  }

  deleteTasting() {
    const { tasting } = this.props
    deleteTasting(tasting.id)
      .then(() => {
        this.setState({ snackbarOpen: true })
      })
      .catch(e => {
        this.setState({ error: e.payload })
      })
  }

  render() {
    const { classes } = this.props
    const deleteTastingButton = this.props.user.isAdmin ?
    <IconButton aria-label="Delete" onClick={this.deleteTasting.bind(this)}>
      <DeleteIcon
        color="primary"
        variant="contained"
      >
        Beer Tasted
      </DeleteIcon>
    </IconButton>
      : <></>

    return (
      <>
        {deleteTastingButton}
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
    )
  }
}

export default withStyles(styles)(DeleteTastingContainer)