'use client'

export const ResgisterForm = () => {
    const onSubmit = (event) => {
        event.preventDefault();
        console.log('Formulario Enviado');
    };

    return (
        <form onClick={ onSubmit }>
            <h1>Registrar</h1>
            <label htmlFor="nome">Nome</label>
            <input type="text" placeholder="Seu nome"/>

            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Email" id="email" name="email"/>

            <label htmlFor="email">Senha</label>
            <input type="password"  id="password" name="password"/>

            <button type="submit">Entrar</button>
        </form>
    )
}

export default ResgisterForm