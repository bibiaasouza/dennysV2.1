import logo from './logo.svg';
import './App.css';
import Home from './dennys.js';
import Logo from './logo.js';
import LoginForm from './loginform';
import './Login_Cadastro.css'; 


function App() {
  return (
    <div className="App">
      <Logo/>
      <Home />
      <LoginForm />
    </div>
  );
}

export default App;
