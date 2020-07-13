import React, { Component } from 'react';
import axios from 'axios';

class EndpointList extends Component {

    handleClick(e) {
        e.preventDefault();

        const accessToken = localStorage.getItem("access_token");        

        const requestURL = e.target.href;

        var config = {
            method: 'get',
            url: requestURL,
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        };

        axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    render() {
        return (
            <div style={{ marginTop: 50 }}>
                <h2>Endpoints</h2>
                <ul>
                    <li><a onClick={this.handleClick} href="http://localhost:9090/api/public/hello">/api/public/hello</a></li>
                    <li><a onClick={this.handleClick} href="http://localhost:9090/api/userInfo">/api/userInfo</a></li>
                    <li><a onClick={this.handleClick} href="http://localhost:9090/api/private/user">/api/private/user</a></li>
                    <li><a onClick={this.handleClick} href="http://localhost:9090/api/private/admin">/api/private/admin</a></li>
                    <li><a onClick={this.handleClick} href="http://localhost:9090/api/private/authenticated">/api/private/authenticated</a></li>
                </ul>
            </div>
        )
    }
}

export default EndpointList;