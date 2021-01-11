import React, {useState, useEffect} from 'react'
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
 
function App() {
  const [infos, setInfos] = useState({
    "name": "",
    "cpfCnpj": "",
    "email": "",
    "lat": "",
    "long": ""
  })

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setInfos({...infos, "lat": position.coords.latitude, "long": position.coords.longitude})
    }, (error) => {
      console.log(error)
    })
  },[])

  const handleChange = (e) => {
    setInfos({
      ...infos,
      [e.target.name]: e.target.value,
    });
  };

  const registerCustomer = () => { 
    console.log('inside', infos)
  }


  return (
    <div className="App">
     <input 
      name='name' 
      type="text"
      value={infos.name}
      onChange={handleChange} 
      placeholder="Digite seu nome"
      />
      <CpfCnpj 
      name="cpfCnpj"
      value={infos.cpfCnpj}
      onChange={handleChange}
      placeholder="Digite o CPF ou CNPJ"
      />
      <input 
      name='email' 
      type="text" 
      value={infos.email} 
      onChange={handleChange}
      placeholder="Digite seu email"/>

      <input 
      name='lat' 
      type="text"
      value={infos.lat} 
      onChange={handleChange}
      placeholder="Digite sua latitude"/>

      <input 
      name='long' 
      type="text" 
      value={infos.long} 
      onChange={handleChange}
      placeholder="Digite sua longitude"/>

      <button onClick={() => registerCustomer()}>Cadastrar</button>
    </div>
  );
}

export default App;
