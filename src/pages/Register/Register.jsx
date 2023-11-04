import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'

const Register = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <FormLogin registerField={true} height={200} width={200} />
    </div>
  )
}

export default Register