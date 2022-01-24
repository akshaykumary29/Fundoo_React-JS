import React, { Component } from "react";
import '../resetpassword/ResetPassword.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import axios from "axios"
import UserService from "../../services/UserService";


export class ResetPassword extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
            confirmPassword: '',
            passwordError: false,
            confirmPasswordError: false
        };
    }

    changeHandle = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.passwordError || error.confirmPasswordError;
    }

    next = () => {
        let data = {
            "password": "akki"
        }

        UserService.resetpassword(data)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

        let isValidated = this.validation();
        if (isValidated) {
            console.log("Success Validated.");
        }
    }

    render() {
        return (
            <div className="signup-container">
                <div className="signup-left">
                    <div className="text-content">
                        <p style={{ color: 'blue' }}>F</p>
                        <p style={{ color: 'red' }}>u</p>
                        <p style={{ color: 'yellow' }}>n</p>
                        <p style={{ color: 'blue' }}>d</p>
                        <p style={{ color: 'green' }}>o</p>
                        <p style={{ color: 'red' }}>o</p>
                    </div>
                    <div className="text-content">Reset Password</div>
                    <div className="form-container">
                        <div className="email-addrs">
                            Create a New Strong Password
                        </div>
                        <div className="field-row">
                            <TextField
                                name="password"
                                id="outlined-basic"
                                label="Password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                autoFocus
                                error={this.state.passwordError}
                                helperText={this.state.passwordError ? "Password is required." : " "}
                                onChange={(e) => this.changeHandle(e)}
                            />
                        </div>
                        <div className="field-row1">
                            <TextField
                                name="confirmPassword"
                                id="outlined-basic"
                                label="Confirm Password"
                                variant="outlined"
                                size="small"
                                fullWidth
                                error={this.state.confirmPasswordError}
                                helperText={this.state.confirmPasswordError ? "Confirm Password is required." : " "}
                                onChange={(e) => this.changeHandle(e)}
                            />
                        </div>

                    </div>
                    <div className="redirect">
                        <div className="skip">Skip</div>
                        <Button variant="contained" onClick={this.next}>Save Password</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ResetPassword
