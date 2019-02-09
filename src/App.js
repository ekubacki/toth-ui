import * as React from 'react';
import SignInContainer from './SignInContainer';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   // need to create state object and it's subvalues so they can be passed around
            user: {
                firstName: '',
                lastName: '',
                email: ''
            }
        };
        this.logOut = this.logOut.bind(this);
    }

    handleSignIn(user) {
        this.setState({user: user});
        localStorage.setItem('user', user);
    }

    render() {    
        if(!localStorage.getItem('user')) {
            return (
                <SignInContainer onSignIn={this.handleSignIn.bind(this)}/>
            );        
        } else {
            return (
                //TODO: Show a quick and dirty rest button for now
                <div>
                    <div>Correctly Signed up</div>
                    <button type="button" onClick={this.logOut} >Log out</button>
                </div>
            )
        }
    }

    //This is a quick and dirty reset button :)
    logOut() {
        localStorage.clear();
        this.setState({user: {}});
    }
}