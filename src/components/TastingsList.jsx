import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { TastingSubmission } from "./TastingSubmission";

const styles = theme => ({});

class TastingForm extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }

  render() {
    const { tastings } = this.props
    return (
      <div>
        <div>
          <h1>Tastings</h1>
        </div>
        {tastings.map((tasting, index) => (
          <TastingSubmission key={index} tasting={tasting}/>
        ))}
        <button type="button" onClick={this.logOut}>
          Log out
        </button>
      </div>
    );
  }

  //This is a quick and dirty reset button :)
  //TODO: How do we get back to the signup page from here?
  logOut() {
    console.log("Logging out a user", this.props.user);
    localStorage.clear();
    this.setState({ user: {} });
    window.location.href = "/";
  }
}

export default withStyles(styles)(TastingForm);
