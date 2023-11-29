import { Dispatch, SetStateAction, useState } from 'react';
import { Input } from '../../fragments/Input';
import { StyleFormLogin } from './StyleFormLogin';
import { zodResolver } from '@hookform/resolvers/zod';
import { TFormLoginSchema, formLoginSchema } from './schemaFormLogin';
import { SubmitHandler, useForm } from 'react-hook-form';


interface IPropFormLogin {
    setRegisterRender: Dispatch<SetStateAction<boolean>>
    setLoginRender: Dispatch<SetStateAction<boolean>>
}

export function FormLogin({setRegisterRender, setLoginRender}: IPropFormLogin) {
    const [showPassword, setShowPassword] = useState(false);

    const renderRegister = () => {
        setLoginRender(false)
        setRegisterRender(true)
    }
    
    const {register, handleSubmit, formState: {errors}} = useForm<TFormLoginSchema>({
        resolver: zodResolver(formLoginSchema),
    })
    const loginSubmit: SubmitHandler<TFormLoginSchema> = (data) => {
        console.log(data);
        
    }

    return (
        <StyleFormLogin>
            <h3>Faça o seu login</h3>
            <form>
                <Input type="email" placeholder="Email" label="Email"  error={errors.email} {...register("email")}/>
                <Input type={showPassword ? "text" : "password"} placeholder="Senha" label="Senha" error={errors.password} {...register("password")}/>
                <div className="passwordView" >
                    <Input onChange={() => setShowPassword(!showPassword)} type="checkbox"label="Mostrar senha"/>
                </div>
                <button onClick={handleSubmit(loginSubmit)} type="submit">Entrar</button>
            </form>
            <div className="login__register">
                <p className="login__register--text">Ainda não possui uma conta?</p>
                <p className="login__register--link" onClick={renderRegister}>Clique aqui</p>
            </div>
        </StyleFormLogin>
    )
    
}