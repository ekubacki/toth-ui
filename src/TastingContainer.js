import * as React from 'react';
import TastingForm from './TastingForm.js';

export default class TastingContainer extends React.Component {
    constructor(props) {
        super(props);

        // {
        //     "tastingsResponse": [
        //         {
        //             "displayNames": [
        //                 "Eric Kubacki"
        //             ],
        //             "beerName": "The Good Stuff",
        //             "brewery": "This is a test brewery"
        //         },
        //         {
        //             "displayNames": [
        //                 "Eric Kubacki"
        //             ],
        //             "beerName": "The Good Stuff part 2",
        //             "brewery": "this is a test brewery"
        //         }
        //     ]
        // }


        this.state = {tastingData : []};
    };

    getTastings() {
        const self = this;
        fetch('http://127.0.0.1:8080/TastingOfTheHops/tasting/tastings', {
            method: 'GET',
            mode : "cors",
        }).then(function(response) {
            return response.json();
        }).then(function(tastingData) {
            console.log("tasting data", tastingData);
            self.setState({tastingData: tastingData});
        });
    }

    render() {;
        return (
            <TastingForm getTastingsData={this.getTastings.bind(this)} tastingData={this.state.tastingData}/>
        );
    }
}

