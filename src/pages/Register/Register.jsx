import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { registerUser } from '../../api/userApis'

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await registerUser(formData);

    console.log("Resposta",response);
    
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Você foi cadastrado com sucesso!",
        preConfirm: navigate("/login")
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado, tente novamente mais tarde",
      });
      console.error('Erro:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className='h-screen flex items-center justify-center div-login'>
      <FormLogin registerField={true} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Register