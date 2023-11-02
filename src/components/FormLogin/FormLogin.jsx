import React from 'react'
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import "./Style.css"
import Logo from "../../Assets/Img/LogoChat2.png"
import { AiFillEye } from "react-icons/ai";
const FormLogin = () => {
  return (
    <div className='bg-white px-[3rem] py-[3rem] h-[45rem] w-[40rem] flex gap-[2.3rem] flex-col rounded-2xl div-form'>
        <div className='flex justify-center'><img src={Logo} alt="" height={300} width={300}/></div>
        <label className='flex justify-center' htmlFor="">Seja bem-vindo ao seu Chat!</label>
        <form className='flex justify-center flex-col self-center w-full font-bold' action="">
            <label htmlFor="Email">E-mail:</label>
            <input id='Email' name='Email' type="text" className='border rounded-full verde pl-4 py-2 mb-6 outline-none'/>
            <label htmlFor="Senha">Senha:</label>
            <input id='Senha' name='Senha' type="password" className='border rounded-full verde pl-4 py-2 mb-6 outline-none'/>
            <button className='bg-verde rounded-full p-2 font-bold text-white'>Logar</button>
        </form>
    </div>    
  )
}

export default FormLogin