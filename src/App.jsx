import * as React from "react";
import SignInContainer from "./components/SignInContainer";
import TastingContainer from "./components/TastingContainer";
import AppBar from './components/AppBar';
import AddTastingForm from "./components/AddTastingForm";

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

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    const user = localStorage.getItem("user")
    if(user) {
      this.setState({user})
    }
  }

  handleSignIn(user) {
    localStorage.setItem("user", user);
    this.setState({ user: user });
  }

  handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  render() {
    if (!localStorage.getItem("user")) {
      return <SignInContainer onSignIn={this.handleSignIn} />;
    }
    return (
      <div>
        <AppBar user={this.state.user} logout={this.handleLogout}/>
        <TastingContainer user={this.state.user} />
        <AddTastingForm />
      </div>
    );
  }
}
