import React from "react";
import { TastingSubmission } from "./TastingSubmission";

class TastingForm extends React.Component {
  render() {
    const { tastings } = this.props
    return (
      <div>
        <h1>Tastings</h1>
        {tastings.map((tasting, index) => (
          <TastingSubmission key={index} tasting={tasting}/>
        ))}
      </div>
    );
  }
}

export default TastingForm;
