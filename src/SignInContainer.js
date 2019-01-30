import * as React from 'react';
import SignInForm from './SignInForm';

export default class SignInContainer extends React.Component {
    handleSubmit(firstName, lastName, email) {
        fetch('http://localhost:8080/TastingOfTheHops/account/signup', {
            method: 'post',
            body: JSON.stringify({
                firstName : firstName,
                lastName : lastName,
                email : email
            })}
        ).then(function(response) {
            return response.json();
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
