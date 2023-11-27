import { Dispatch, SetStateAction } from 'react';
import { Input } from '../../fragments/Input';
import { StyleFormLogin } from './StyleFormLogin';


interface IPropFormLogin {
    setRegisterRender: Dispatch<SetStateAction<boolean>>
    setLoginRender: Dispatch<SetStateAction<boolean>>
}

export function FormLogin({setRegisterRender, setLoginRender}: IPropFormLogin) {
    const renderRegister = () => {
        setLoginRender(false)
        setRegisterRender(true)
    }
    return (
        <StyleFormLogin>
            <h3>Faça o seu login</h3>
            <form>
                <Input type="email" placeholder="Email" label="Email" />
                <Input type="password" placeholder="Senha" label="Senha" />
                <button type="submit">Entrar</button>
            </form>
            <div className="login__register">
                <p className="login__register--text">Ainda não possui uma conta?</p>
                <p className="login__register--link" onClick={renderRegister}>Clique aqui</p>
            </div>
        </StyleFormLogin>
    )
    
}