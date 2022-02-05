import React, { Component } from "react";
import '../signin/Signin.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { Redirect } from "react-router-dom";

const service = new UserService();
const history = useHistory;

export class Signin extends Component {
    
    
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            emailError: false,
            passwordError: false
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
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.emailError || error.passwordError;
    }

    
    next = () => {

        let data = {
            "email": this.state.email,
            "password": this.state.password
        }
        service.signin(data)
            .then((res) => {
                localStorage.setItem("token", res.data.data.token)
                localStorage.setItem("firstName", res.data.data.firstName)
                localStorage.setItem("lastName", res.data.data.lastName)
                localStorage.setItem("email", res.data.data.email)
                localStorage.setItem("id", res.data.data.userId)
                console.log(res.data.data.token);

                // history.push('/dashboard');
                // Redirect
                React.useEffect(() => {
                    if (localStorage.getItem("token")) {
                        Redirect('/')
                    }
                }, [])

                
                    // if (localStorage.getItem("token")) {
                        // Redirect('/')
                    // }
                

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
                        <TextField name="email" id="outlined-basic" label="Email or phone" variant="outlined" fullWidth autoFocus
                            error={this.state.emailError}
                            helperText={this.state.emailError ? "Email or Phone is required." : " "}
                            onChange={(e) => this.changeHandle(e)}
                        />
                    </div>
                    <div className="pass">
                        <TextField name="password" id="outlined-basic" label="Password" type="password" variant="outlined" fullWidth
                            error={this.state.passwordError}
                            helperText={this.state.passwordError ? "Password is required." : " "}
                            onChange={(e) => this.changeHandle(e)}
                        />
                    </div>
                    <Link to="/forgotemail"><div className="forget">Forget email?</div></Link>
                    <div className="text-content">
                        <p className="text">Not your computer? Use Guest mode to sign in privately.</p>
                        <p className="learnmore">Learn more</p>
                    </div>
                    <div className="create">
                        <Link to="/register"> <p className="c-text" >Create account</p></Link>
                        <div className="next">
                         <Link to="/"> <Button style={{ backgroundColor: 'blue' }} variant="contained" onClick={this.next}>Next</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin