'use client'
import { useState } from 'react';
import axios from 'axios';
import * as S from './style';

export const ResgisterForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const onChangeValue = (e) => {
        const {name, value} = e.target
        if (name === 'email') setEmail(value)
        if (name === 'password') setPassword(value)
        if (name === 'name') setName(value)
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
          const response =  await axios.post('http://localhost:8080/auth/register', {email, password, name})
          localStorage.setItem('token', response.data.data.token)  
          console.log('res', response);
        }
        catch (err) {
            console.log('error', err);
        }

    }
    return (
        <form onClick={ onSubmit }>
            <S.H1>Registrar</S.H1>
            <S.TextField name='name' onChange={onChangeValue} label="Nome" variant="outlined" />
            <S.TextField name='email' onChange={onChangeValue} label="Email" variant="outlined" />
            <S.TextField name='password'onChange={onChangeValue} type='password' label="Senha" variant="outlined" />
            <S.Button variant="outlined" color="success">Entrar</S.Button>
        </form>
    )
}

export default ResgisterForm