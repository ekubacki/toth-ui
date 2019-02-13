import * as React from "react";
import TastingsList from "./TastingsList";
import { getTastings } from "../utils/api";

export default class TastingContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {tastingData : []};

    //TODO: If I put the below code in place it's not correctly working ... why?
    this.state = {
      tastings: []
    };
  }

  componentDidMount() {
    getTastings()
      .then(response => {
        this.setState({ tastings: response.tastingsResponse});
        console.log(this.state)
      })
      .catch(e => {
        this.setState({ error: e.payload });
      });
  }

  render() {
    return <TastingsList tastings={this.state.tastings} />;
  }
}
