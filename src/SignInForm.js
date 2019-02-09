import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {   // need to create state object and it's subvalues so they can be passed around
      firstName: '',
      lastName: '',
      email: ''
    };

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);  // binds function to html form input
    this.handleLastNameChange = this.handleLastNameChange.bind(this);  // binds function to html form input
    this.handleEmailChange = this.handleEmailChange.bind(this);  // binds function to html form input
    this.handleSubmit = this.handleSubmit.bind(this);  // binds function to html onclick handle submit button
  }

  handleFirstNameChange(event) {   //called by onChange in html form
    this.setState({firstName: event.target.value});   // event.target.value is from javascripts navtive eventing
  }

  handleLastNameChange(event) {   //called by onChange in html form
    this.setState({lastName: event.target.value});   // event.target.value is from javascripts navtive eventing
  }

  handleEmailChange(event) {   //called by onChange in html form
    this.setState({email: event.target.value});   // event.target.value is from javascripts navtive eventing
  }

  handleSubmit() {  //this is called from the form when the sign in button is called
    this.props.onSubmit(this.state.firstName, this.state.lastName, this.state.email);  //onsubmit is created from container (see notes)
  };

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Who Are You?
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstName">First Name</InputLabel>
              <Input id="firstName" name="First Name" value={this.state.firstName} onChange={this.handleFirstNameChange} autoComplete="givern-Name" autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="lastName">Last Name</InputLabel>
              <Input id="lastName" name="Last Name" value={this.state.lastName} onChange={this.handleLastNameChange} autoComplete="family-Name" autoFocus />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" value={this.state.email} onChange={this.handleEmailChange} autoComplete="email" autoFocus />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign in / Sign up
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(SignInForm);