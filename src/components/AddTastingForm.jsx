import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField';
import AddTastingButton from '../components/AddTastingButton'

const ERROR_STYLE = {
  background: '#d34c4c',
  color: '#FFF',
  borderRadius: '10px',
  width: '80%',
  textAlign: 'center',
  margin: 'auto'
}

class AddTastingForm extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false, error: false });
  };

  handleSignUpClicked = () => {
    const { name, brewery } = this.state
    
    if( name && brewery ) {
      this.props.onSubmit(this.state.name, this.state.brewery)
      this.setState({ open: false, error: false })
    } else {
      this.setState({ error: 'Please enter the beer name and brewery' })
    }
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  };

  render() {
    const { fullScreen } = this.props;
    const errorDiv = this.state.error ? 
    <div style={ERROR_STYLE}>
      {this.state.error}
    </div> : null

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
            {errorDiv}
            <DialogContent>
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
                required
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