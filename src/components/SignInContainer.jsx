import * as React from "react";
import SignInForm from "./SignInForm";
import { signup, signIn } from "../utils/api";

export default class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  handleSignUp(firstName, lastName, email) {
    const user = {
      firstName,
      lastName,
      email
    };
    signup(firstName, lastName, email)
      .then(response => {
        const userWithID = Object.assign({id: response.accountId}, user)
        this.props.onSignIn(userWithID);
      })
      .catch(error => {
        this.setState({error: error.payload})
      });
  }
  
  handleSignIn(firstName, lastName, email) {
    const user = {
      firstName,
      lastName,
      email
    };
    signIn(firstName, lastName, email)
      .then(response => {
        const userWithID = Object.assign({id: response.id}, user)
        this.props.onSignIn(userWithID);
      })
      .catch(error => {
        this.setState({error: error.payload})
      });
  }

  render() {
    return (
      <SignInForm onSignup={this.handleSignUp} onSignIn={this.handleSignIn}/> //<SignInForm onSubmit === this.props.onSubmit on the form
    );
  }
}
