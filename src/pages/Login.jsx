import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FieldGroup from '../components/FieldGroup';
import {Button} from 'react-bootstrap';


class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onLogin({
            userLogin: this.loginInput,
            userPassword: this.passwordInput
        });
    }

    render() {
        return (
            this.props.isLogedIn ?
                <Redirect to="/products" />
            :
                <main className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Text"
                            placeholder="Enter your Email"
                        />
                        <FieldGroup
                            id="formControlsPassword"
                            type="password"
                            label="Email address"
                            placeholder="Enter your password"
                        />
                        <Button bsStyle="primary" type="submit">Enter</Button>
                    </form>
                </main>
        )
    }
}


Login.propTypes = {
    onLogin: React.PropTypes.func.isRequired
}

export default Login;