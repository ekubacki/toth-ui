import * as React from 'react';
import SignInContainer from './SignInContainer.js';
import TastingContainer from './TastingContainer.js';

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
    }

    handleSignIn(user) {
        this.setState({user: user});
        localStorage.setItem('user', user);
    }

    render() {    
        if(!localStorage.getItem('user')) {
            return (<SignInContainer onSignIn={this.handleSignIn.bind(this)}/>);
        }
        return (<TastingContainer user={this.state.user}/>);
    }
}