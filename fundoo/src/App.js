import logo from './logo.svg';
import './App.css';
import { Signup } from './pages/signup/Signup';
import { Signin } from './pages/signin/Signin';

function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <Signin />
    </div>
  );
}

export default App;
