import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/Signup.css';
import logo1 from '../../assests/logo1.svg';


export class Signup extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            passWord: '',
            confirmPassword: '',
            firstNameError: false,
            lastNameError: false,
            userNameError: false,
            passWordError: false,
            confirmPasswordError: false
        };
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
        error.firstNameError = this.state.firstName === '' ? true : false;
        error.lastNameError = this.state.lastName === '' ? true : false;
        error.userNameError = this.state.userName === '' ? true : false;
        error.passWordError = this.state.passWord === '' ? true : false;
        error.confirmPasswordError = this.state.confirmPassword === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.firstNameError || error.lastNameError || error.userNameError || error.passWordError || error.confirmPasswordError;
    }

    next = () => {
        let isValidated = this.validation();
        if (isValidated) {
            console.log("Success Validated");
        }
    }


    render() {
        return (
            <div className="main-body">
                <div className="page">
                    <div className="left-part">
                        <div className="google">
                            <p style={{ color: 'blue' }}>F</p>
                            <p style={{ color: 'red' }}>u</p>
                            <p style={{ color: 'yellow' }}>n</p>
                            <p style={{ color: 'blue' }}>d</p>
                            <p style={{ color: 'green' }}>o</p>
                            <p style={{ color: 'red' }}>o</p>
                        </div>
                        <br />
                        <h2 className="h1-heading">Create your Fundoo Account</h2>
                        <br />
                        {/* <div className="first-line">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" autoFocus/>
                        <span><TextField id="outlined-basic" label="Last Name" variant="outlined" /></span>
                        </div> */}

                        <div className="field-row">
                            <div>
                                <TextField
                                    name="firstName"
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    autoFocus
                                    error = {this.state.firstNameError}
                                    helperText = {this.state.firstNameError ? "Firstname is required." : ""}
                                    onChange = {(e) => this.changeHandle(e)}
                                />
                            </div>
                            <div>
                                <TextField
                                    name="lastName"
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    error = {this.state.lastNameError}
                                    helperText = {this.state.lastNameError ? "Lastname is required." : ""}
                                    onChange={(e) => this.changeHandle(e)}
                                />
                            </div>
                        </div>


                        {/* helperText="You can use letters,number & periods" */}
                        <div className="emailId">
                            <TextField name="userName" id="outlined-basic" label="Username" variant="outlined" size="small" fullWidth  
                            error = {this.state.userNameError}
                            helperText = {this.state.userNameError ? "Username is required." : "You can use letters,number & periods"}
                            onChange={(e) => this.changeHandle(e)}   
                            />
                        </div>
                        <div className="email-option">Use my current email address instead</div><br />
                        <div className="password">
                            <TextField name="passWord" id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth  
                            error = {this.state.passWordError}
                            helperText = {this.state.passWordError ? "Password is required." : "Use 8 or more characters with a mix of letters, numbers & symbols"}
                            onChange={(e) => this.changeHandle(e)}
                            />
                            <TextField name="confirmPassword" id="outlined-basic" label="Confirm" variant="outlined" size="small" fullWidth 
                            error = {this.state.confirmPasswordError}
                            helperText = {this.state.confirmPasswordError ? "Confirmpassword is required." : ""}
                            onChange={(e) => this.changeHandle(e)}
                            />
                        </div>
                        <div className="showpass">
                            <input className="check" type="checkbox" />
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="last-part">
                            <p className="signin">Sign in instead</p>
                            <p className="box">
                                <Button variant="contained" onClick={this.next}>Next</Button>
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <img className="logo" src={logo1} alt="logo" />
                        <p className="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div>
        )
    }
}