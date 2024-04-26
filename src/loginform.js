import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login_Cadastro.css'; 
import './App.css';


  const LoginForm = () => {

    const handleLogin = (e) => {
      e.preventDefault();
      // Lógica de autenticação aqui           <Link to="/register" className="btn btn-success"> Criar Cadastro</Link>
    };

    return (
      <div className="login-form">
        <h2>Login</h2>
        
        <Form onSubmit={handleLogin}>
          
          <div className='input-box'>
  <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Seu email" />
          </Form.Group>
          </div>

          <div className='input-box'>
          <Form.Group controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Senha" />
          </Form.Group>
          </div>

          <div className='remember-forgot'>
            <label><input type='checkbox'/> Lembrar</label>
            <a href='#'> Esqueceu a senha?</a>
          </div>

          <Button variant="primary" type="submit" block className="custom-button">
  Entrar
</Button>


          < div className='register-link'>
            <p> Não tem uma conta? <a href="/register">Crie agora!</a></p>
          </div>




        </Form>
      </div>
    );
  };

  export default LoginForm;
