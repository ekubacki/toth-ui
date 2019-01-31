import * as React from 'react';
import SignInForm from './SignInForm';

export default class SignInContainer extends React.Component {
    handleSubmit(firstName, lastName, email) {
        console.log("hello");
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
            console.log(response.json());
        }).then(function(data) {
            console.log(data);
        });
    }

    render() {
        console.log("in continater");
        return (
            <SignInForm onSubmit={this.handleSubmit.bind(this)}/>   //<SignInForm onSubmit === this.props.onSubmit on the form
        );        
    }
}
