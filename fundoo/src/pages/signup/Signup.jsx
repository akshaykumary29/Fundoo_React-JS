import React, { Component } from "react";
import '../signup/Signup.css';
import TextField from '@mui/material/TextField';
import logo1 from '../assests/logo1.svg';

export class Signup extends Component {
    render() {
        return (
            <div className="main-body">
                <div className="page">
                    <div className="left-part">
                        <div className="google">
                            <p style={{ color: 'blue' }} >G</p>
                            <p style={{ color: 'red' }}>o</p>
                            <p style={{ color: 'yellow' }}>o</p>
                            <p style={{ color: 'blue' }}>g</p>
                            <p style={{ color: 'green' }}>l</p>
                            <p style={{ color: 'red' }}>e</p>
                        </div>
                        <br />
                        <h2 className="h1-heading">Create your Google Account</h2>
                        <br />
                        <div className="first-line">
                        <TextField id="outlined-basic" label="First Name" variant="outlined" />
                        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                        </div>

                        <div className="emailId">
                        <TextField id="outlined-basic" label="Username" variant="outlined" helperText="You can use letters,number & periods" />
                        </div><br />
                        <div email-option>Use my current email address instead</div><br />
                        <div className="password">
                        <TextField id="outlined-basic" label="Password" variant="outlined" />
                        <TextField id="outlined-basic" label="Confirm" variant="outlined" helperText="Use 8 or more characters with a mix of letters, numbers & symbols" />

                        </div>
                        <div className="showpass">
                            <input classname="check" type="checkbox" />
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="last-part">
                            <p className="signin">Sign in instead</p>
                            <p className="box">
                                <button className="button">Next</button>
                            </p>
                        </div>
                    </div>
                    <div className="image">
                        <img class="logo" src={logo1} alt="logo" />
                        <p className="logo-text">One account. All of Google working for you.</p>
                    </div>
                </div>
            </div>
        )
    }
}