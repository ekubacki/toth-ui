import * as React from "react"
import TastingsList from "./TastingsList"
import Loading from './icons/Loading'
import AddTastingForm from "./AddTastingForm"
import { getAllBeers, addBeer } from "../utils/api"

export default class ViewContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      tastings: [],
      lineup: []
    }
    this.addBeer = this.addBeer.bind(this)
  }

  componentDidMount() {
    getAllBeers()
      .then(response => {
        this.setState({
          lineup: response.lineup,
          tastings: response.tastings,
          loading: false
        })
      })
      .catch(e => {
        this.setState({ error: e.payload })
      })
  }

  addBeer(name, brewery) {
    addBeer(name, brewery, this.props.user)
      .then(getAllBeers)
      .catch(e => {
        console.error('e')
      })
      .then(response => {
        this.setState({
          lineup: response.lineup,
          tastings: response.tastings,
          loading: false
        })
      })
      .catch(e => {
        this.setState({ error: e.payload })
      })

    // toast erro
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    switch (this.props.currentView) {
      case 'TASTINGS':
        return (
          <>
            <TastingsList tastings={this.state.tastings} user={this.props.user} title={'2019 Tastings'} subTitle={'This is the sign up sheet'} />
            <AddTastingForm onSubmit={this.addBeer} />
          </>
        )
      case 'LINEUP':
        return <TastingsList tastings={this.state.lineup} user={this.props.user} title={'Lineup'} subTitle={"What's on deck"} />
      default:
        return null
    }
  }
}
