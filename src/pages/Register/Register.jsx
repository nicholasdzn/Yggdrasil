import React from 'react'
import FormLogin from '../../components/FormLogin/FormLogin'

const Register = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
      <FormLogin registerField={true} />
    </div>
  )
}

export default Register