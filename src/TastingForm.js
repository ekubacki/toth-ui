import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({});

class TastingForm extends React.Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
        this.getTastings = this.getTastings.bind(this);
    };

    getTastings() {
        console.log("form tasting data", JSON.stringify(this.props.getTastingsData()));
    };

    render() {
        console.log("in rendor");
        console.log("state tastingData: ", this.props.tastingData.tastingsResponse);
        if (!this.props.tastingData.tastingsResponse) {
            return (
                <div>
                    <div>Correctly Signed up</div>
                    <div> {this.getTastings()} </div>
                    <button type="button" onClick={this.logOut} >Log out</button>
                </div>
            );
        } else {
            return (
                <div>
                    <div>Correctly Signed up</div>
                    <ul>
                        {this.props.tastingData.tastingsResponse.map(
                            function(tastings){
                                return (
                                    <li>
                                        <ul>
                                            <div>Beer: {tastings.beerName}</div>
                                            <div>Brewery: {tastings.brewery}</div>
                                            <div>Who Brought the Beer: {tastings.displayNames.map(function(name){return (<div>{name}</div>);})}</div>
                                        </ul>
                                    </li>
                                );
                            })}
                    </ul>
                    <button type="button" onClick={this.logOut} >Log out</button>
                </div>
            );
        }
        
    }

    //This is a quick and dirty reset button :)
    //TODO: How do we get back to the signup page from here?
    logOut() {
        console.log("Logging out a user", this.props.user);
        localStorage.clear();
        this.setState({user: {}});
    }
}

export default withStyles(styles)(TastingForm);