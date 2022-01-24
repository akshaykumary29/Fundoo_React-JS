import React, { Component } from "react";
import '../forgotemail/ForgotEmail.scss'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from "../../services/UserService";

export class ForgotEmail extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userEmail: '',
            userEmailError: false
        }
    }

    changeHandle = (e) => {
        console.log(e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.userEmailError = this.state.userEmail === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.userEmailError;
    }

    next = () => {
        let data = {
            "email":"akki@gmail.com"
        }

        UserService.forgotemail(data)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })

        let isValidated = this.validation();
        if (isValidated) {
            console.log("Success Validated")
        }
    }

    render() {
        return (
            <div className="forgot-page">
                <div className="forgot">
                    <div className="first-line">
                        <div className="fundoo1">
                            <p style={{ color: 'blue' }}>F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        < p className="find-email">Find your email</p>
                        <p className="phoneNumber">Enter your phone phone or recovery email</p>
                    </div>
                    <div className="enter-email">
                        <TextField name="userEmail" id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth autoFocus
                            error={this.state.userEmailError}
                            helperText={this.state.userEmailError ? "Valid Email or Number is required." : " "}
                            onChange={(e) => this.changeHandle(e)}
                        />
                    </div>
                    <div className="next-btn">
                        <Button variant="contained" onClick={this.next}>Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ForgotEmail