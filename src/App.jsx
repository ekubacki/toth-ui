import * as React from "react";
import SignInContainer from "./components/SignInContainer";
import TastingContainer from "./components/TastingContainer";
import AppBar from './components/AppBar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // need to create state object and it's subvalues so they can be passed around
      user: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  }

  handleSignIn(user) {
    localStorage.setItem("user", user);
    this.setState({ user: user });
  }

  render() {
    if (!localStorage.getItem("user")) {
      return <SignInContainer onSignIn={this.handleSignIn.bind(this)} />;
    }
    return (
      <div>
        <AppBar />
        <TastingContainer user={this.state.user} />
      </div>
    );
  }
}
