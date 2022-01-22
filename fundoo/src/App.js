import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';
import { ForgotEmail } from './pages/forgotemail/ForgotEmail';
import ResetPassword from './pages/resetpassword/ResetPassword';

function App() {
  return (
    <div className="App">
      <Signup />
      {/* <Signin /> */}
      {/* <ForgotEmail /> */}
      {/* <ResetPassword /> */}
    </div>
  );
}

export default App;
