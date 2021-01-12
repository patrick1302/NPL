import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../../services/api'

const Login = () => {
    const [loginInfos, setLoginInfos] = useState({"user": "", "password": ""})

    const history = useHistory();
    const login = async (e) => {
        e.preventDefault();
        try {
          const response = await api.post('/login', loginInfos)
          sessionStorage.setItem('token', response.data)
          history.push('/home')
        }catch(e){
          console.log(e)
        }
      }

      const handleChange = e => {
          setLoginInfos({...loginInfos, [e.target.name]: e.target.value})
      }
      console.log(loginInfos)

      return (
        <div className="App">
          <form>
            <div className="form-group">
              <label htmlFor="user">Usuário</label>
              <input id="user" name="user" value={loginInfos.user} className="form-control" onChange={handleChange} type='text' placeholder="Digite seu usuário"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <input id="password" name="password" value={loginInfos.password} onChange={handleChange}  className="form-control" type='password' placeholder="Digite sua senha"/>
            </div>
            <button onClick={login} className="login-button">Fazer login</button>
          </form>
        </div>
      ); 
}

export default Login;