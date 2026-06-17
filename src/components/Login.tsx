import React, { useState } from 'react'
import {useForm, type SubmitHandler} from 'react-hook-form';
import {Input} from '../components'

interface loginInput {
    username: string,
    email: string,
    password: string
}

function Login() {
    const[error, setError] = useState('')
    const {register, handleSubmit} = useForm<loginInput>()
    const login: SubmitHandler<loginInput> = (data)=>{

    }
  return (
    <div>
       <form onSubmit={handleSubmit(login)}>
            <Input
              label='email'
              type='text'
              className='rounded-xl'
             />

       </form>
    </div>
  )
}

export default Login
