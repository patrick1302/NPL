import React, {useState, useEffect} from 'react'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";

import  api  from './services/api'

import Swal from 'sweetalert2'

import './style.css'

function App() {
  const [customerInfos, setCustomerInfos] = useState({
    "name": "",
    "cpfCnpj": "",
    "email": "",
    "lat": "",
    "long": ""
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCustomerInfos({...customerInfos, "lat": position.coords.latitude, "long": position.coords.longitude})
    }, (error) => {
      console.log(error)
    })
  },[])

  const handleChange = (e) => {
    setCustomerInfos({
      ...customerInfos,
      [e.target.name]: e.target.value,
    });
  };

  const registerCustomer = async (e) => { 
    e.preventDefault()
    try {
      await api.post('/customer', customerInfos)
      Swal.fire({
        text: "Cliente cadastrado com sucesso",
        icon: "success",
      });
      setCustomerInfos(
        {
        "name": "",
        "cpfCnpj": "",
        "email": "",
        "lat": "",
        "long": ""
        })
    }
    catch(e){
      console.log(e)
      Swal.fire({
        text: "Erro ao cadastrar cliente",
        icon: "warning",
      });
    }
  } 

  return (
    <div className="main">
      <form className="form-container">
        <div className="form-group">
          <label htmlFor='name'>Nome</label>
          <input
            id='name'
            name='name' 
            className="form-control"
            type="text"
            value={customerInfos.name}
            onChange={handleChange} 
            placeholder="Digite seu nome"
            />
        </div>
        <div className="form-group">
          <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
          <CpfCnpj
          id="cpfCnpj"
          name="cpfCnpj"
          className="form-control"
          value={customerInfos.cpfCnpj}
          onChange={handleChange}
          placeholder="Digite o CPF ou CNPJ"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label> 
          <input 
          id="email"
          name='email'
          className="form-control" 
          type="text" 
          value={customerInfos.email} 
          onChange={handleChange}
          placeholder="Digite seu email"/>
        </div>
        <div className="form-group">
          <label htmlFor="lat">Latitude</label>
          <input 
          id="lat"
          name='lat'
          className="form-control" 
          type="text"
          value={customerInfos.lat} 
          onChange={handleChange}
          placeholder="Digite sua latitude"/>
        </div>
        <div className="form-group">
          <label htmlFor="long">Longitude</label>
          <input
          id="long"
          name='long' 
          type="text"
          className="form-control" 
          value={customerInfos.long} 
          onChange={handleChange}
          placeholder="Digite sua longitude"/>
        </div>
        <button className="register-button" onClick={registerCustomer}>Cadastrar</button>
      </form>
      </div>
  );
}

export default App;
