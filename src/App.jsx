import * as React from "react";
import SignInContainer from "./components/SignInContainer";
import ViewContainer from "./components/ViewContainer";
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
      },
      currentView: 'TASTINGS'
    };

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    const user = localStorage.getItem("user")
    if(user) {
      this.setState({user: JSON.parse(localStorage.getItem("user")), currentView: 'LINEUP'})
    }
  }

  handleSignIn(user) {
    const newUser = Object.assign({}, user);
    localStorage.setItem("user", JSON.stringify(newUser));
    this.setState({ user: newUser, currentView: 'TASTINGS' });
  }

  handleLogout() {
    localStorage.clear();
    window.location.href = "/";
  }

  onViewChange(view) {
    this.setState({currentView: view})
  }

  render() {
    if (!localStorage.getItem("user")) {
      return <SignInContainer onSignIn={this.handleSignIn} />;
    }
    return (
      <div>
        <AppBar user={this.state.user} currentView={this.state.currentView} logout={this.handleLogout} onViewChange={this.onViewChange.bind(this)}/>
        <ViewContainer user={this.state.user} currentView={this.state.currentView}/>
      </div>
    );
  }
}
