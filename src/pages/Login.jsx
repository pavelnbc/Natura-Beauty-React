import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

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
                        <input type="text"
                               name="username"
                               className="mdc-textfield__input"
                               placeholder="Enter your login"
                               ref={(title => this.loginInput = title)}/>
                        <input type="password"
                               name="userpassword"
                               className="mdc-textfield__input"
                               placeholder="Enter your passwword"
                               ref={(title => this.passwordInput = title)}/>
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