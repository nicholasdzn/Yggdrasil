import React from 'react'
import "./Style.css"
import FormLogin from '../../components/FormLogin/FormLogin'
import { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Private from '../../routes/Private'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/users/login', formData);
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Sucesso!",
                    text: "Você foi logado com sucesso!",
                    preConfirm: navigate("/chat")
                });
                let token = response.data.token;
                localStorage.setItem('authtoken', token);
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
        <div className='h-screen flex items-center justify-center div-login'>
            <FormLogin handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
    )
}

export default Login