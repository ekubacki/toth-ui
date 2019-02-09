import * as React from 'react';
import SignInForm from './SignInForm';

export default class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(firstName, lastName, email) {
        const self = this;
        let user = {
                firstName : firstName,
                lastName : lastName,
                email : email
        }

        fetch('http://127.0.0.1:8080/TastingOfTheHops/account/signup', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            mode : "cors",
            body: JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                email : email
            })
        }).then(function(response) {
            if(response.ok) {
                response.json().then(function(object) {
                    console.log('success', object);
                    console.log("user", user);
                    self.props.onSignIn(user);
                });      
            } else {
                response.json().then(function(object) {
                    console.log('error', object);
                });
            }
        }).catch(function(error) {
           error.reject()
        })
    }

    render() {;
        return (
            <SignInForm onSubmit={this.handleSubmit.bind(this)}/>   //<SignInForm onSubmit === this.props.onSubmit on the form
        );        
    }
}