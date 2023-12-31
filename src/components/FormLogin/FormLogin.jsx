import React from 'react'
import "./Style.css"
import Logo from "../../Assets/Img/LogoChat2.png"
import { Link } from 'react-router-dom';

const FormLogin = ({ registerField, handleChange, handleSubmit }) => {
  return (
    <div className='bg-white px-[3rem] py-[3rem] h-[45rem] w-[40rem] flex justify-evenly flex-col rounded-2xl div-form'>
      <div className='flex justify-center'><img src={Logo} alt="" className='logo-png' /></div>
      <h3 className='text-center'>Seja bem-vindo ao seu Chat!</h3>
      <form className='flex flex-col self-center w-full' onSubmit={handleSubmit}>
        {registerField && <><label htmlFor='name'>Nome</label>
          <input id='name' name='name' type='text' className='border rounded-full verde pl-4 py-2 mb-6 outline-none' onChange={handleChange} />
        </>
        }
        <label htmlFor="email">E-mail:</label>
        <input id='email' name='email' type="text" className='border rounded-full verde pl-4 py-2 mb-6 outline-none' onChange={handleChange} />
        <label htmlFor="password">Senha:</label>
        <input id='password' name='password' type="password" className='border rounded-full verde pl-4 py-2 mb-6 outline-none' onChange={handleChange} />
        {!registerField && <p className='ForgotPassword '>Esqueceu sua senha?</p>}
        <button className='bg-verde rounded-full p-2 font-bold text-white mt-4 w-1/4 self-center hover:bg-emerald-600'>{!!registerField ? "Registrar" : "Logar"}</button>
        {registerField ? <p className='text-center mt-2'>Já possui conta? <Link className="verde hover:text-emerald-600" to={"/login"}>Logar agora.</Link></p> :
          <p className='text-center mt-2'>Não possui conta? <Link className="verde hover:text-emerald-600" to={"/register"}>Registrar agora.</Link></p>}
      </form>
    </div>
  )
}

export default FormLogin