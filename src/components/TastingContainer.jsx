import * as React from "react";
import TastingsList from "./TastingsList";
import Loading from './Loading';
import { getTastings } from "../utils/api";

export default class TastingContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {tastingData : []};

    //TODO: If I put the below code in place it's not correctly working ... why?
    this.state = {
      tastings: [],
      loading: true
    };
  }

  componentDidMount() {
    getTastings()
      .then(response => {
        this.setState({ tastings: response.tastingsResponse, loading: false });
        console.log(this.state)
      })
      .catch(e => {
        this.setState({ error: e.payload });
      });
  }

  render() {
    // TODO: Push this down into the TastingsList...NO DISPLAY IN CONTAINERS
    return (
      <div>
        {this.state.loading ? <Loading /> : <div/>}
        <TastingsList tastings={this.state.tastings} />
      </div>
    );   
  }
}
