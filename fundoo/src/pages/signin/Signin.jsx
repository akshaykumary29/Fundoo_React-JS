import React, { Component } from "react";
import '../signin/Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

const service = new UserService();


export class Signin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            emailVal: '',
            passwordVal: '',
            emailValError: false,
            passwordValError: false
        }
    }

    changeHandle = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.emailValError = this.state.emailVal === '' ? true : false;
        error.passwordValError = this.state.passwordVal === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailValError || error.passwordValError;
    }

    next = () => {

        let data = {
            "email": "akki@gmail.com",
            "password": "akki"
        }
        service.signin(data)
            .then((res) => {
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("id", res.data.data.userId)
                console.log(res.data.data.data.token);
            })
            .catch((err) => {
                console.log(err);
            })

        let isValidated = this.validation();
        if (isValidated) {
            console.log("Success Validated");
        }
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <div className="first-content">
                        <div className="Google">
                            <p style={{ color: 'blue' }}>F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <p className="sign-in">Sign in</p>
                        <p className="account">Use your Fundoo Account</p>
                    </div>
                    <div className="email">
                        <TextField name="emailVal" id="outlined-basic" label="Email or phone" variant="outlined" fullWidth autoFocus
                            error={this.state.emailValError}
                            helperText={this.state.emailValError ? "Email or Phone is required." : " "}
                            onChange={(e) => this.changeHandle(e)}
                        />
                    </div>
                    <div className="pass">
                        <TextField name="passwordVal" id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth
                            error={this.state.passwordValError}
                            helperText={this.state.passwordValError ? "Password is required." : " "}
                            onChange={(e) => this.changeHandle(e)}
                        />
                    </div>
                    <Link to="/forgotemail"><div className="forget">Forget email?</div></Link>
                    <div className="text-content">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <Link to="/"> <p className="c-text" >Create account</p></Link>
                        <div className="next">
                            <Button variant="contained" onClick={this.next}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin