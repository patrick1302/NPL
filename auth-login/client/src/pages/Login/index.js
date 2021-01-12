import React, { useEffect } from 'react';



import api from '../../services/api'

const Login = () => {
    const login = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/login')
          console.log(response.data)
          sessionStorage.setItem('token', response.data)
        }catch(e){
          console.log(e)
        }
      }

      return (
        <div className="App">
          <form>
            <div className="form-group">
              <label htmlFor="user">Usuário</label>
              <input id="user" className="form-control" type='text' placeholder="Digite seu usuário"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input id="password" className="form-control" type='password' placeholder="Digite sua senha"/>
            </div>
            <button onClick={login} className="login-button">Fazer login</button>
          </form>
        </div>
      ); 
}

export default Login;