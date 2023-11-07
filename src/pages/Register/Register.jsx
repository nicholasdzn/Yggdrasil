import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'


const Register = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/api/users/create', formData);
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Você foi cadastrado com sucesso!",
        });
      }
    }
    catch (error) {
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
    <div className='h-screen flex items-center justify-center'>
      <FormLogin registerField={true} handleChange={handleChange} handleSubmit={handleSubmit} />
    </div>
  )
}

export default Register