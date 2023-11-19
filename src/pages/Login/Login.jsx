import React from 'react'
import "./Style.css"
import FormLogin from '../../components/FormLogin/FormLogin'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

import { loginUser } from '../../api/userApis'

const Login = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!formData.email || !formData.password){
            Swal.fire({
              icon: "error",
              title: "Campos obrigatórios em branco",
              text: "Por favor, preencha todos os campos obrigatórios.",
            });
            return;
        }

        const response = await loginUser(formData);

        if (response && response.status === 200) {
            Swal.fire({
                icon: "success",
                title: "Sucesso!",
                text: "Você foi logado com sucesso!",
                preConfirm: navigate("/chat")
            });
            let token = response.data.token;
            localStorage.setItem('authtoken', token);
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "E-mail ou senha incorretos, tente novamente",
            });
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    
    return (
        <div className='h-screen flex items-center justify-center div-login'>
            <FormLogin handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Login