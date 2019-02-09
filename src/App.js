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
    }

    handleSignIn(user) {
        console.log("saving state in container");
        this.setState({user: user});
    }

      
    render() {
        if(!this.state.user.firstName) {
            console.log("have not signed up yet");
            return (
                <SignInContainer onSignIn={this.handleSignIn.bind(this)}/>
            );        
        } else {
            console.log("User was signed up");;
            return (
                <div>Correctly Signed up</div>
                //<TastingContainer />
            )
        }
    }
}