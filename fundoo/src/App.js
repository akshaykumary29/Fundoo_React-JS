import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';
import { ForgotEmail } from './pages/forgotemail/ForgotEmail';
import { ResetPassword } from './pages/resetpassword/ResetPassword';


function App() {
  return (
    // <div className="App">
      // <Signup />
    //    {/* <Signin /> */}
    //   {/* <ForgotEmail /> */}
    //   {/* <ResetPassword />
    //   </div>
      <Router>
        <Switch>
          <Route exact path='/register' component={Signup}></Route>
          <Route path='/signin' component={Signin}></Route>
          <Route path='/forgotemail' component={ForgotEmail}></Route>
          <Route path='/resetpassword' component={ResetPassword}></Route>
          <Route path='*' component={() => "Oops! Page Not Found"}></Route>
        </Switch>
      </Router>    
  );
}

export default App;