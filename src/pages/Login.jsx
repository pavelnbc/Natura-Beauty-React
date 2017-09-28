import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import FieldGroup from '../components/FieldGroup';


class Login extends Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            isLogedIn: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onLogin({
            userLogin: this.loginInput,
            userPassword: this.passwordInput
        });
        this.setState({
            isLogedIn: true
        })
    }

    render() {
        return (
            this.state.isLogedIn ?
                <Redirect to="/" />
            :
                <main className="login-form">
                    <form onSubmit={this.handleSubmit}>
                        <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Text"
                            placeholder="Enter text"

                        />
                        <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                        />
                        <button>Enter</button>
                    </form>
                </main>
        )
    }
}


Login.propTypes = {
    onLogin: React.PropTypes.func.isRequired
}

export default Login;