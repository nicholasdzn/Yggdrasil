import React from 'react'
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/checkbox/checkbox.js';
import "./Style.css"
import Logo from "../../Assets/Img/LogoChat2.png"
import { AiFillEye } from "react-icons/ai";
import { Link } from 'react-router-dom';
const FormLogin = ({registerField, height, width}) => {
  return (
    <div className='bg-white px-[3rem] py-[3rem] h-[45rem] w-[40rem] flex justify-evenly flex-col rounded-2xl div-form'>
      <div className='flex justify-center'><img src={Logo} alt="" height={height ? height : 300} width={height ? width : 300} /></div>
      <h3 className='text-center'>Seja bem-vindo ao seu Chat!</h3>
      <form className='flex flex-col self-center w-full' action="">
        {registerField && <><label htmlFor='name'>Nome</label>
                          <input id='name' name='name' type='text' className='border rounded-full verde pl-4 py-2 mb-6 outline-none' />
                          </>
        }
        <label htmlFor="email">E-mail:</label>
        <input id='email' name='email' type="text" className='border rounded-full verde pl-4 py-2 mb-6 outline-none' />
        <label htmlFor="password">Senha:</label>
        <input id='password' name='password' type="password" className='border rounded-full verde pl-4 py-2 mb-6 outline-none' />
        <button className='bg-verde rounded-full p-2 font-bold text-white mt-4 w-1/4 self-center'>{!!registerField ? "Registrar" : "Logar"}</button>
        {registerField ? <p className='text-center mt-2'>Já possui conta? <Link className="verde hover:text-emerald-600" to={"/login"}>Logar agora.</Link></p> :
        <p className='text-center mt-2'>Não possui conta? <Link className="verde hover:text-emerald-600" to={"/register"}>Registrar agora.</Link></p>}
      </form>
    </div>
  )
}

export default FormLogin