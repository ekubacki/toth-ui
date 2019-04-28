import React from "react";
import { TastingSubmission } from "./TastingSubmission";

class TastingsList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: undefined
    }
    this.onSubmissionExpanded = this.onSubmissionExpanded.bind(this)
  }

  onSubmissionExpanded(tastingId) {
    console.log('onSubmissionExpanded ', tastingId)
    this.setState({
      expanded: tastingId
    })
  }

  render() {
    const { tastings, title, subTitle, user } = this.props
    const { expanded } = this.state
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <h3 style={{textAlign: 'center'}}><i>{subTitle}</i></h3>
        {tastings.map((tasting, index) => (
          <div key={index} style={{margin: '10px'}}>
            <TastingSubmission user={user} key={index} tasting={tasting} expanded={expanded} onSubmissionExpanded={this.onSubmissionExpanded}/>
          </div>
        ))}
      </div>
    );
  }
}

export default TastingsList;
