import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';
import { ForgotEmail } from './pages/forgotemail/ForgotEmail';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      {/* <Signin /> */}
      <ForgotEmail />
    </div>
  );
}

export default App;
