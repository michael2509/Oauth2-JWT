import React, { Component } from 'react';
import axios from 'axios';

class LoginForm extends Component {

    handleSubmit(e) {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        var config = {
            method: 'post',
            url: `http://localhost:9090/oauth/token?grant_type=password&username=${username}&password=${password}&client_id=my-client-app`,
            headers: { }
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            localStorage.setItem("access_token", response.data.access_token)
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {

        return (
            <div>
                <h1>Oauth 2 / JWT Login</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" name="username" />
                    <br></br>
                    <br></br>
                    <label htmlFor="password">Password </label>
                    <input type="password" id="password" name="password" />
                    <br></br>
                    <br></br>
                    <button>Envoyer</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;