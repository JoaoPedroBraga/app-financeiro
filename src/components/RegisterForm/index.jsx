'use client'
import { useState } from 'react';
import axios from 'axios';
import * as S from './style';

export const ResgisterForm = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const [open, setOpen] = useState(false);

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
          HandleClick();
        }
        catch (err) {
            console.log('error', err);
        }

    }

    const HandleClick = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <S.Form onClick={ onSubmit }>
                <S.H1>Registrar</S.H1>
                <S.TextField name='name' onChange={onChangeValue} label="Nome" variant="outlined" fullWidth/>
                <S.TextField name='email' onChange={onChangeValue} label="Email" variant="outlined" fullWidth/>
                <S.TextField name='password'onChange={onChangeValue} type='password' label="Senha" variant="outlined" fullWidth/>
                <S.Button variant="contained" color="success">Entrar</S.Button>
            </S.Form>

            <S.Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                <S.Alert onClose={handleClose} severity='success' variant='filled' sx={{width: '100%'}}>
                    Usuario {email} Cadastrado com Sucesso
                </S.Alert>
            </S.Snackbar>
        </>

    )
}

export default ResgisterForm