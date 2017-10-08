import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FieldGroup from '../components/FieldGroup';
import {Button, FormGroup, FormControl} from 'react-bootstrap';


class Login extends Component {
    constructor({ user, onLogin }) {
        super({ user, onLogin });

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.userLogin.value && this.userPassword.value) {
            this.props.onLogin({
                userLogin: this.userLogin.value,
                userPassword: this.userPassword.value
            });
        }
    }

    render() {
        return (
            this.props.user
            ? <Redirect to="/products" />
            : <main className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <FormControl
                                type="email"
                                placeholder="Enter Email"
                                inputRef={(input) => {this.userLogin = input}}
                            />
                            <FormControl
                                type="password"
                                placeholder="Enter password"
                                inputRef={(input) => {this.userPassword = input}}
                            />
                        </FormGroup>
                        <Button bsStyle="primary" type="submit">Enter</Button>
                    </form>
                </main>
        )
    }
}


Login.propTypes = {
    onLogin: React.PropTypes.func.isRequired
};

export default Login;
