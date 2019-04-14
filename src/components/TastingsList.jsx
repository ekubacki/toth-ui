import React from "react";
import { TastingSubmission } from "./TastingSubmission";

class TastingForm extends React.Component {
  render() {
    const { tastings, title, subTitle } = this.props
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        <h3 style={{textAlign: 'center'}}><i>{subTitle}</i></h3>
        {tastings.map((tasting, index) => (
          <div key={index} style={{margin: '10px'}}>
            <TastingSubmission user={this.props.user} key={index} tasting={tasting}/>
          </div>
        ))}
      </div>
    );
  }
}

export default TastingForm;
