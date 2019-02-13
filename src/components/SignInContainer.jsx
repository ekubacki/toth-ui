import * as React from "react";
import SignInForm from "./SignInForm";
import { signup } from "../utils/api";

export default class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(firstName, lastName, email) {
    const user = {
      firstName,
      lastName,
      email
    };
    signup(firstName, lastName, email)
      .then(response => {
        this.props.onSignIn(user);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <SignInForm onSubmit={this.handleSubmit.bind(this)} /> //<SignInForm onSubmit === this.props.onSubmit on the form
    );
  }
}
