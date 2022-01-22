import React, { Component } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../signup/Signup.css';
import logo1 from '../../assests/logo1.svg';


export class Signup extends Component {
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
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                    autoFocus
                                />
                            </div>
                            <div>
                                <TextField
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    size="small"
                                    fullWidth
                                />
                            </div>
                        </div>

                        <div className="emailId">
                            <TextField id="outlined-basic" label="Username" variant="outlined" size="small" fullWidth helperText="You can use letters,number & periods" />
                        </div>
                        <div className="email-option">Use my current email address instead</div><br />
                        <div className="password">
                            <TextField id="outlined-basic" label="Password" variant="outlined" size="small" fullWidth helperText="Use 8 or more characters with a mix of letters, numbers & symbols" />
                            <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" fullWidth />
                        </div>
                        <div className="showpass">
                            <input classname="check" type="checkbox" />
                            <p className="showbox">Show Password</p>
                        </div>
                        <div className="last-part">
                            <p className="signin">Sign in instead</p>
                            <p className="box">
                                <Button variant="contained">Next</Button>
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