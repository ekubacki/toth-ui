import React from "react";
import { TastingSubmission } from "./TastingSubmission";

class TastingForm extends React.Component {
  render() {
    const { tastings, title } = this.props
    return (
      <div>
        <h1 style={{textAlign: 'center'}}>{title}</h1>
        {tastings.map((tasting, index) => (
          <div key={index} style={{margin: '10px'}}>
            <TastingSubmission key={index} tasting={tasting}/>
          </div>
        ))}
      </div>
    );
  }
}

export default TastingForm;
