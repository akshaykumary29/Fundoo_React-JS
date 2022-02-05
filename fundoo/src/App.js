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
import IsBin from './pages/bin/IsBin';
import Archive from './pages/archive/Archive';



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
        <Route exact path='/register' component={Signup} />
        <Route path='/signin' component={Signin} />
        <Route path='/forgotemail' component={ForgotEmail} /> 
        <Route path='/resetpassword/:id' component={ResetPassword} />

        {/* <ProtectedRoute path='/dashboard' component={Dashboard}></ProtectedRoute> */}

        <ProtectedRoute path='/' component={Dashboard} /> 
          <Route exact path='/archive' component={Archive} />
          <Route exact path='/deleted' component={IsBin} />
      

        {/* <Route path='/portals' component={Demoportals}></Route> */}
        <Route path='*' component={() => "Oops! Page Not Found"} />
      </Switch>
    </Router>
  );
}

export default App;

