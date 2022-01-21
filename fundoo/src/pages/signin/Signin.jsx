import React, { Component } from "react";
import '../signin/Signin.css'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export class Signin extends Component {
    render() {
        return (
            <div className="login-page">
                <div className="login-container">
                    <div className="first-content">
                        <div className="Google">
                            <p style={{ color: 'blue' }} >G</p>
                            <p style={{ color: 'red' }}>o</p>
                            <p style={{ color: 'yellow' }}>o</p>
                            <p style={{ color: 'blue' }}>g</p>
                            <p style={{ color: 'green' }}>l</p>
                            <p style={{ color: 'red' }}>e</p>
                        </div>
                        <p className="sign-in">Sign in</p>
                        <p className="account">Use your Google Account</p>
                    </div>
                    <div className="email">
                        <TextField id="outlined-basic" label="Email or phone" variant="outlined" fullWidth autoFocus />
                    </div>
                    <br></br>
                    <div className="forget">Forget email?</div>
                    <div className="text-content">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <p className="c-text" >Create account</p>
                        <div className="box">
                        <Button variant="next">Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin