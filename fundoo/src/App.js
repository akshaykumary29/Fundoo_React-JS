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
import Dashboard from './pages/dashboard/Dashboard'
import TakeNote from './components/takeNote/TakeNote';
import { Icons } from './components/icons/Icons';
import Demoportals from './pages/portals/Demoportals';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';



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
        <Route path='/resetpassword/:id' component={ResetPassword}></Route>

        <ProtectedRoute Route path='/dashboard' component={Dashboard}></ProtectedRoute>
        {/* <Route path='/portals' component={Demoportals}></Route> */}
        <Route path='*' component={() => "Oops! Page Not Found"}></Route>
      </Switch>
    </Router>
  );
}

export default App;

