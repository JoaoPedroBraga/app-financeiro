'use client'

// import Button from "@mui/material/Button";
import * as S from './style';

export const LoginForm = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario Enviado');
    };

    return (
        <form onClick={ onSubmit }>
            <S.H1>Login</S.H1>
            <S.TextField id="email" label="Email" variant="outlined" />
            <S.TextField id="password" type='password' label="password" variant="outlined" />
            <S.Button variant="outlined" color="success">Entrar</S.Button>
        </form>
    )
}