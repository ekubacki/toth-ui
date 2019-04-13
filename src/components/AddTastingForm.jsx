import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import AddTastingButton from '../components/AddTastingButton'

class AddTastingForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSignUpClicked = () => {
    const newBeer = {
      name: this.state.name, 
      submitter: this.state.submitter,
      brewery: this.state.brewery
    }

    this.props.onSubmit(newBeer)
    this.setState({ open: false })
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    const { fullScreen } = this.props;

    return (
      <div>
        <AddTastingButton onClick={this.handleClickOpen.bind(this)}></AddTastingButton>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <form>
            <DialogTitle id="responsive-dialog-title">{"Sign your beer up"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please enter your information below:
            </DialogContentText>
              <TextField
                required
                autoFocus
                margin="dense"
                id="name"
                label="Your name"
                type="text"
                onChange={this.handleChange('submitter')}
                fullWidth
              />
              <TextField
                required
                autoFocus
                margin="dense"
                id="beerName"
                label="Beer's name"
                type="text"
                onChange={this.handleChange('name')}
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="brewery"
                label="Brewery"
                type="text"
                onChange={this.handleChange('brewery')}
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
            </Button>
              <Button onClick={this.handleSignUpClicked.bind(this)} color="primary" autoFocus>
                Register Tasting
            </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}

AddTastingForm.propTypes = {
  fullScreen: PropTypes.bool.isRequired,
};

export default withMobileDialog()(AddTastingForm);