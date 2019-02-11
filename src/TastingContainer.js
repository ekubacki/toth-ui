import * as React from 'react';
import TastingForm from './TastingForm.js';

export default class TastingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tastingData : []};

        //TODO: If I put the below code in place it's not correctly working ... why?
        // this.state = {
        //     tastingData : {
        //         tastingsResponse: [{
        //             displayNames: [],
        //             beerName: '',
        //             brewery: ''
        //         }]
        //     }
        // };
    };

    getTastings() {
        const self = this;
        fetch('http://127.0.0.1:8080/TastingOfTheHops/tasting/tastings', {
            method: 'GET',
            mode : "cors",
        }).then(function(response) {
            return response.json();
        }).then(function(tastingData) {
            self.setState({tastingData: tastingData});
        });
    }

    render() {;
        return (
            <TastingForm getTastingsData={this.getTastings.bind(this)} tastingData={this.state.tastingData}/>
        );
    }
}

