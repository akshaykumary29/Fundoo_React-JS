import React, { Component } from "react";
import '../resetpassword/ResetPassword.scss'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


export class ResetPassword extends Component {
    render() {
    return (
        <div className="signup-container">
            <div className="signup-left">
                <div className="text-content">
                <p style={{ color: 'blue' }} >G</p>
                            <p style={{ color: 'red' }}>o</p>
                            <p style={{ color: 'yellow' }}>o</p>
                            <p style={{ color: 'blue' }}>g</p>
                            <p style={{ color: 'green' }}>l</p>
                            <p style={{ color: 'red' }}>e</p>
                </div>
                <div className="text-content">Reset Password</div>
                <div className="form-container">
                <div className="email-addrs">
                        Create a New Strong Password
                    </div>
                    <div className="field-row">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                            autoFocus
                        />
                    </div>
                    <div className="field-row">
                        <TextField
                            id="outlined-basic"
                            label="Confirm Password"
                            variant="outlined"
                            size="small"
                            fullWidth
                        />
                    </div>
                    
                </div>
                <div className="redirect">
                    <div className="skip">Skip</div>
                    <Button variant="contained">Save Password</Button>
                </div>
            </div>
        </div>
    );
}
}

export default ResetPassword
