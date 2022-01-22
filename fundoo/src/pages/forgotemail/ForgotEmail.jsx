import React, { Component } from "react";
import '../forgotemail/ForgotEmail.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class ForgotEmail extends Component {
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
                        <TextField id="outlined-basic" label="Phone number or email" variant="outlined" fullWidth autoFocus />
                    </div>
                    <div className="next-btn">
                        <Button variant="contained">Next</Button>
                    </div>
                </div>
            </div>
        )
    }
}


export default ForgotEmail