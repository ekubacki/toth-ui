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
        this.props.getTastingsData();
    };

    render() {
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
                    <div><h1>Tastings</h1></div>
                        {this.props.tastingData.tastingsResponse.map(
                            function(tastings, index){
                                return (
                                    <div key={index}>
                                        <div>Beer: {tastings.beerName}</div>
                                        <div>Brewery: {tastings.brewery}</div>
                                        <div>Who Brought the Beer: {tastings.displayNames.map(function(name, index){return (<span key={index}>{name}</span>);})}</div>
                                        <br />
                                    </div>    
                                );
                            })
                        }
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
        window.location.href = "/"
    }
}

export default withStyles(styles)(TastingForm);