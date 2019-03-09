import * as React from "react";
import TastingsList from "./TastingsList";
import Loading from './Loading';
import AddTastingForm from "./AddTastingForm";
import { getAllBeers } from "../utils/api";

export default class ViewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      tastings: [],
      lineup: []
    }
  }

  componentDidMount() {
    getAllBeers()
      .then(response => {
        this.setState({
          lineup: response.lineup,
          tastings: response.tastings,
          loading: false
        });
      })
      .catch(e => {
        this.setState({ error: e.payload });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    switch (this.props.currentView) {
      case 'TASTINGS':
        return (
          <>
            <TastingsList tastings={this.state.tastings} title={'2019 Tastings'} />
            <AddTastingForm />
          </>
        );
      case 'LINEUP':
        return <TastingsList tastings={this.state.lineup} title={'Lineup'} />;
      default:
        return null;
    }
  }
}
