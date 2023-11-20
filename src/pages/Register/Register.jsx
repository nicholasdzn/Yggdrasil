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

    if (!formData.email || !formData.password || !formData.name){
      Swal.fire({
        icon: "error",
        title: "Campos obrigatórios em branco",
        text: "Por favor, preencha todos os campos obrigatórios.",
      });
      return;
    }

    const response = await registerUser(formData);

    console.log(response.status)

    if (response && response.status === 201) {
      Swal.fire({
        icon: "success",
        title: "Sucesso!",
        text: "Você foi cadastrado com sucesso!",
        preConfirm: navigate("/login")
      })
    }
    else if (response && response.status === 409) {
      Swal.fire({
        icon: "error",
        title: "Esse E-mail já foi cadastrado",
        text: "Tente novamente com um E-mail diferente.",
      }
    )}else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo deu errado, tente novamente mais tarde",
      });
      console.error('Erro:', error);
    }
  }

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