import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import api from '../../services/api'
import Swal from 'sweetalert2'

import './style.css'

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
          Swal.fire({
            text: "Usuário  ou senha incorreta",
            icon: "warning",
          });
        }
      }

      const handleChange = e => {
          setLoginInfos({...loginInfos, [e.target.name]: e.target.value})
      }

      return (
        <div className="main">
          <form className="form-container">
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